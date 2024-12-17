import { Animated, Dimensions, StyleSheet } from "react-native";

const styles = (
  width: Animated.Value,
  height: Animated.Value,
  color?: string,
  borderColor?: string,
) =>
  StyleSheet.create({
    iconButton: {
      backgroundColor: color,
      borderColor: borderColor,
      borderWidth: 1,
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
      width: Animated.subtract(width, 32),
      height: Animated.subtract(height, 32),
    },
  });

export default styles;
