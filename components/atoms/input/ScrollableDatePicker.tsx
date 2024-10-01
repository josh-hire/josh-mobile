import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import { HeadingText } from "../text/HeadingText";
import { Colors } from "@constants/Colors";
import { Assets } from "@constants/Assets";

const ITEM_HEIGHT = 40;
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface DatePickerProps {
  onDateChange: (date: Date) => void;
  initialDate?: Date;
  title: string;
}

const ScrollableDatePicker = ({
  onDateChange,
  initialDate = new Date(),
  title
}: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [animation] = useState(new Animated.Value(SCREEN_HEIGHT));
  const dayRef = useRef<ScrollView>(null);
  const monthRef = useRef<ScrollView>(null);
  const yearRef = useRef<ScrollView>(null);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = Array.from(
    { length: 50 },
    (_, i) => new Date().getFullYear() - 25 + i
  );

  useEffect(() => {
    scrollToDate(selectedDate);
  }, []);

  const scrollToDate = (date: Date) => {
    const dayIndex = date.getDate() - 1;
    const monthIndex = date.getMonth();
    const yearIndex = years.findIndex((year) => year === date.getFullYear());

    dayRef.current?.scrollTo({ y: dayIndex * ITEM_HEIGHT, animated: false });
    monthRef.current?.scrollTo({
      y: monthIndex * ITEM_HEIGHT,
      animated: false,
    });
    yearRef.current?.scrollTo({ y: yearIndex * ITEM_HEIGHT, animated: false });
  };

  const handleScroll = (event: any, type: "day" | "month" | "year") => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    let newDate = new Date(selectedDate);

    switch (type) {
      case "month":
        newDate.setMonth(index);
        break;
      case "year":
        newDate.setFullYear(years[index]);
        break;
    }

    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  const renderScrollColumn = (
    data: (string | number)[],
    ref: React.RefObject<ScrollView>,
    type: "day" | "month" | "year"
  ) => (
    <ScrollView
      ref={ref}
      showsVerticalScrollIndicator={false}
      snapToInterval={ITEM_HEIGHT}
      decelerationRate="fast"
      onMomentumScrollEnd={(e) => handleScroll(e, type)}
      style={styles.scrollColumn}
      contentContainerStyle={{ paddingVertical: ITEM_HEIGHT }}
    >
      {data.map((item, index) => (
        <View key={index} style={styles.item}>
          <HeadingText type="h6" style={styles.itemText}>{item}</HeadingText>
        </View>
      ))}
    </ScrollView>
  );

  const showModal = () => {
    setIsModalVisible(true);
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(animation, {
      toValue: SCREEN_HEIGHT,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
    });
  };

  return (
    <View style={styles.container}>
      <HeadingText type="h4">{title}</HeadingText>
      <TouchableOpacity onPress={showModal} style={styles.openButton}>
        <HeadingText style={styles.openButtonText}>{selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}</HeadingText>
        <Image source={Assets.icons.chevronDown} />
      </TouchableOpacity>
      {isModalVisible && (
        <Modal
          transparent={true}
          animationType="none"
          visible={isModalVisible}
          onRequestClose={hideModal}
        >
          <TouchableOpacity style={styles.overlay} onPress={hideModal} />
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ translateY: animation }] },
            ]}
          >
            <View style={styles.pickerContainer}>
              <View style={styles.singleContainer}>
                <HeadingText type="h5" fontWeight="bold">Month</HeadingText>
                {renderScrollColumn(months, monthRef, "month")}
              </View>
              <View style={styles.singleContainer}>
                <HeadingText type="h5" fontWeight="bold">Years</HeadingText>
                {renderScrollColumn(years, yearRef, "year")}
              </View>
              <View style={styles.selectionOverlay} pointerEvents="none" />
            </View>
            <Pressable onPress={hideModal} style={styles.closeButton}>
              <HeadingText style={styles.closeButtonText} color={Colors.primary.p04}>Cancel</HeadingText>
            </Pressable>
          </Animated.View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  openButton: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  openButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  singleContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12
  },
  scrollColumn: {
    width: 160,
    height: ITEM_HEIGHT * 3,
    paddingHorizontal: 24,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
  selectionOverlay: {
    position: "absolute",
    top: ITEM_HEIGHT + 33,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  closeButton: {
    marginTop: 16,
    alignSelf: "center",
  },
  closeButtonText: {
    fontSize: 16,
  },
});

export default ScrollableDatePicker;
