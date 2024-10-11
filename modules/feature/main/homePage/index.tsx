import ProfileCard from "@/components/molecules/card/profileCard";
import React, { useState, useRef } from "react";
import {
  View,
  PanResponder,
  Animated,
  Dimensions,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@styles/global.styles";
import { Colors } from "@/constants/Colors";
import { IconButton } from "@/components/atoms/button/IconButton";
import { Assets } from "@/constants/Assets";
import JobCard from "@/components/molecules/card/jobCard";
import styles from "@modules/feature/main/homePage/home.styles";
import MatchModal from "@/components/molecules/modal/MatchModal";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;
const CARD_SCALE_DECREMENT = 0.08;
const CARD_POSITION_MULTIPLIER = -40;
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.95;

interface CardData {
  id: string;
  imageUrl: string;
  companyName: string;
  location: string;
  jobType: string;
}

export default function HomePage() {
  const cards: CardData[] = [
    {
      id: "1",
      imageUrl: "https://picsum.photos/seed/1/400/600",
      companyName: "Telkomsel",
      location: "South Jakarta",
      jobType: "Full Time",
    },
    {
      id: "2",
      imageUrl: "https://picsum.photos/seed/2/400/600",
      companyName: "Company B",
      location: "San Francisco",
      jobType: "Part-time",
    },
    {
      id: "3",
      imageUrl: "https://picsum.photos/seed/3/400/600",
      companyName: "Company C",
      location: "London",
      jobType: "Contract",
    },
    {
      id: "4",
      imageUrl: "https://picsum.photos/seed/4/400/600",
      companyName: "Company D",
      location: "London",
      jobType: "Contract",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [leftBtnSize] = useState(new Animated.Value(50));
  const [rightBtnSize] = useState(new Animated.Value(50));
  const [centerButtonSize] = useState(new Animated.Value(60));
  const swipe = useRef(new Animated.ValueXY()).current;
  const cardScales = useRef(cards.map(() => new Animated.Value(1))).current;
  const cardPositions = useRef(cards.map(() => new Animated.Value(0))).current;
  const pan = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const SwipeUpResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        const newValue = isOpen ? -DRAWER_HEIGHT + gesture.dy : gesture.dy;
        pan.setValue(Math.min(0, Math.max(-DRAWER_HEIGHT, newValue)));
      },
      onPanResponderRelease: (_, gesture) => {
        if (isOpen) {
          if (gesture.dy > DRAWER_HEIGHT / 4 || gesture.vy > 0.5) {
            closeDrawer();
          } else {
            openDrawer();
          }
        } else if (gesture.dy < -DRAWER_HEIGHT / 4 || gesture.vy < -0.5) {
          openDrawer();
        } else {
          closeDrawer();
        }
      },
    })
  ).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        swipe.setValue({ x: gesture.dx, y: 0 });
        setButtonSize(gesture.dx);
      },
      onPanResponderRelease: (_, gesture) => {
        resetButtonSize();
        if (Math.abs(gesture.dx) > SWIPE_THRESHOLD) {
          const direction = gesture.dx > 0 ? "right" : "left";
          forceSwipe(direction);
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  const openDrawer = () => {
    Animated.spring(pan, {
      toValue: -DRAWER_HEIGHT,
      useNativeDriver: false,
    }).start(() => setIsOpen(true));
  };

  const closeDrawer = () => {
    Animated.spring(pan, {
      toValue: 0,
      useNativeDriver: false,
    }).start(() => setIsOpen(false));
  };

  const drawerTranslateY = pan.interpolate({
    inputRange: [-DRAWER_HEIGHT, 0],
    outputRange: [-DRAWER_HEIGHT, 0],
    extrapolate: "clamp",
  });

  const forceSwipe = (direction: "right" | "left") => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(swipe, {
      toValue: { x, y: 0 },
      duration: 250,
      useNativeDriver: true,
    }).start(() => onSwipeComplete());
  };

  const onSwipeComplete = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    swipe.setValue({ x: 0, y: 0 });
    cards.forEach((_, index) => {
      cardScales[index].setValue(
        1 - (index - currentIndex - 1) * CARD_SCALE_DECREMENT
      );
      cardPositions[index].setValue(
        (index - currentIndex - 1) * CARD_POSITION_MULTIPLIER
      );
    });
  };

  const setButtonSize = (position: number) => {
    if (position < 0) {
      Animated.timing(leftBtnSize, {
        toValue: 50 + Math.abs(position) * 0.1,
        duration: 0,
        useNativeDriver: false,
      }).start();
    } else if (position > 0) {
      Animated.timing(rightBtnSize, {
        toValue: 50 + Math.abs(position) * 0.1,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  const resetButtonSize = () => {
    Animated.timing(leftBtnSize, {
      toValue: 50,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(rightBtnSize, {
      toValue: 50,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const resetPosition = () => {
    Animated.spring(swipe, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
    }).start();
    cards.forEach((_, index) => {
      if (index > currentIndex) {
        Animated.spring(cardScales[index], {
          toValue: 1 - (index - currentIndex) * CARD_SCALE_DECREMENT,
          useNativeDriver: true,
        }).start();
        Animated.spring(cardPositions[index], {
          toValue: (index - currentIndex) * CARD_POSITION_MULTIPLIER,
          useNativeDriver: true,
        }).start();
      }
    });
  };

  const getCardStyle = (index: number) => {
    if (index < currentIndex) return null;

    const scale = 1 - (index - currentIndex) * CARD_SCALE_DECREMENT;
    const positionOffset = (index - currentIndex) * CARD_POSITION_MULTIPLIER;

    if (index === currentIndex) {
      return {
        ...styles.card,
        zIndex: cards.length - index,
        transform: [
          ...swipe.getTranslateTransform(),
          { scale: 1 },
          { translateY: 0 },
        ],
      };
    }

    return {
      ...styles.card,
      zIndex: cards.length - index,
      transform: [{ translateY: positionOffset }, { scale }],
    };
  };

  const renderCards = () => {
    if (currentIndex >= cards.length) {
      return <Text style={styles.noMoreCards}>No more cards</Text>;
    }

    return cards
      .map((card, index) => {
        if (index < currentIndex) return null;

        const cardStyle = getCardStyle(index);

        return (
          <JobCard
            key={card.id}
            card={card}
            cardStyle={cardStyle}
            currentIndex={currentIndex}
            index={index}
            panResponder={panResponder}
          />
        );
      })
      .reverse();
  };

  return (
    <SafeAreaView style={[globalStyles.screen, styles.screenBackground]}>
      <ProfileCard name="Afgan"></ProfileCard>
      <View style={styles.container}>
        {renderCards()}
        <View style={styles.leftButton}>
          <IconButton
            handler={() => {
              forceSwipe("left");
            }}
            icon={Assets.icons.no}
            color={Colors.primary.p02}
            width={leftBtnSize}
            height={leftBtnSize}
            {...panResponder.panHandlers}
          />
        </View>
        <View style={styles.centerButton}>
          <Animated.View
            style={[
              styles.buttonContainer,
              {
                transform: [{ translateY: drawerTranslateY }],
              },
            ]}
          >
            <View style={styles.button} {...SwipeUpResponder.panHandlers}>
              <Image source={Assets.icons.swipeup}></Image>
            </View>
          </Animated.View>
          <IconButton
            handler={() => {
              setIsModalVisible(true);
            }}
            icon={Assets.icons.fliter}
            color={Colors.secondary.s08}
            width={centerButtonSize}
            height={centerButtonSize}
          />
        </View>
        <View style={styles.rigthButton}>
          <IconButton
            handler={() => {
              forceSwipe("right");
            }}
            icon={Assets.icons.yes}
            color={Colors.secondary.s02}
            width={rightBtnSize}
            height={rightBtnSize}
            {...panResponder.panHandlers}
          />
        </View>
      </View>
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateY: drawerTranslateY }],
          },
        ]}
      >
        <View style={styles.drawerHandle} {...SwipeUpResponder.panHandlers}>
          <View style={styles.drawerHandlerItem} />
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.drawerContent}>Bottom Drawer Content</Text>
          {[...Array(30)].map((_, index) => (
            <Text key={index + 1} style={styles.contentItem}>
              Scrollable Content Item {index + 1}
            </Text>
          ))}
        </ScrollView>
      </Animated.View>
      <MatchModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
    </SafeAreaView>
  );
}
