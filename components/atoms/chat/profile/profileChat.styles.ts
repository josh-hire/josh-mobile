import { Colors } from "@constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileImage: {
    width: 48,
    height: 48,
    borderColor: Colors.neutral.n03,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
  },
});

export default styles;
