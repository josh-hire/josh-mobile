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
    editContainer: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.secondary.s06,
      borderRadius:
        Math.round(
          Dimensions.get("window").width + Dimensions.get("window").height
        ) / 2,
    },
    editImage: {
      width: 30,
      height: 30,
    },
  });

export default styles;
