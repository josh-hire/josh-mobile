import ProfileCard from "@components/molecules/card/profileCard";
import React, { useState, useRef } from "react";
import {
  View,
  PanResponder,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@styles/global.styles";
import { Colors } from "@constants/Colors";
import { IconButton } from "@components/atoms/button/IconButton";
import { Assets } from "@constants/Assets";
import JobCard from "@components/molecules/card/jobCard";
import styles from "@modules/feature/main/homePage/home.styles";
import FilterModal from "@components/molecules/modal/FIlterModal";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;
const CARD_SCALE_DECREMENT = 0;
const CARD_POSITION_MULTIPLIER = 0;

interface CardData {
  id: string;
  imageUrl: string;
  companyName: string;
  salary: string;
  location: string;
}

export default function HomePage() {
  const cards: CardData[] = [
    {
      id: "1",
      imageUrl: "https://picsum.photos/seed/1/400/600",
      companyName: "Telkomsel",
      salary: "IDR 8.000.000 - 10.000.000",
      location: "South Jakarta",
    },
    {
      id: "2",
      imageUrl: "https://picsum.photos/seed/2/400/600",
      companyName: "Company B",
      salary: "IDR 12.000.000 - 13.000.000",
      location: "South Jakarta",
    },
    {
      id: "3",
      imageUrl: "https://picsum.photos/seed/3/400/600",
      companyName: "Company C",
      salary: "IDR 6.000.000 - 7.000.000",
      location: "South Jakarta",
    },
    {
      id: "4",
      imageUrl: "https://picsum.photos/seed/4/400/600",
      companyName: "Company D",
      salary: "IDR 8.000.000",
      location: "South Jakarta",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [leftBtnSize] = useState(new Animated.Value(50));
  const [rightBtnSize] = useState(new Animated.Value(60));
  const [centerButtonSize] = useState(new Animated.Value(80));
  const swipe = useRef(new Animated.ValueXY()).current;
  const cardScales = useRef(cards.map(() => new Animated.Value(1))).current;
  const cardPositions = useRef(cards.map(() => new Animated.Value(0))).current;

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        swipe.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (_, gesture) => {
        if (Math.abs(gesture.dx) > SWIPE_THRESHOLD) {
          const direction = gesture.dx > 0 ? "right" : "left";
          forceSwipe(direction);
        } else {
          resetPosition();
        }
      },
    })
  ).current;

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
      <ProfileCard setIsVisible={setIsModalVisible}></ProfileCard>
      <View style={styles.container}>{renderCards()}</View>
      <View style={styles.bottomContainer}>
        <View style={styles.noButton}>
          <IconButton
            handler={() => {
              forceSwipe("left");
            }}
            icon={Assets.icons.no}
            borderColor="white"
            color={Colors.general.background}
            width={leftBtnSize}
            height={leftBtnSize}
          />
        </View>
        <View style={styles.centerButton}>
          <IconButton
            handler={() => {
              forceSwipe("right");
            }}
            icon={Assets.icons.like}
            color={Colors.secondary.s06}
            width={centerButtonSize}
            height={centerButtonSize}
          />
        </View>
        <View style={styles.refreshButton}>
          <IconButton
            handler={() => {}}
            icon={Assets.icons.refresh}
            color={Colors.neutral.n08}
            width={rightBtnSize}
            height={rightBtnSize}
          />
        </View>
      </View>
      <FilterModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
    </SafeAreaView>
  );
}
