import { Animated, Dimensions, StyleSheet } from "react-native";

const styles = (
  width: Animated.Value,
  height: Animated.Value,
  color?: string
) =>
  StyleSheet.create({
    iconButton: {
      backgroundColor: color,
      borderRadius:
        Math.round(
          Dimensions.get("window").width + Dimensions.get("window").height
        ) / 2,
      width: width,
      height: width,
      zIndex: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    iconImage: {
      width: Animated.subtract(width, 25),
      height: Animated.subtract(height, 25),
    },
  });

export default styles;
