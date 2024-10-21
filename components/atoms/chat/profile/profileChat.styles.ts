import { Colors } from "@constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const styles = (size: number) =>
  StyleSheet.create({
    profileImage: {
      width: size,
      height: size,
      borderColor: Colors.neutral.n03,
      borderRadius:
        Math.round(
          Dimensions.get("window").width + Dimensions.get("window").height
        ) / 2,
    },
  });

export default styles;
