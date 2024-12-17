import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    margin: 4,
  },
  selectedButton: {
    backgroundColor: Colors.secondary.s03,
  },
  unselectedButton: {
    borderColor: Colors.neutral.n00,
    borderWidth: 1,
  },
  selectedText: {
    color: "#FFFFFF",
  },
  unselectedText: {
    color: "white",
  },
  buttonText: {
    fontSize: 16,
  },
});

export default styles;
