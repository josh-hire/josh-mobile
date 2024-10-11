import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bubbleContainer: {
    backgroundColor: Colors.neutral.n01,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10,
    maxWidth: "95%"
  },
});

export default styles;
