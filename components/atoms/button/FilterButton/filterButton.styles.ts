import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    margin: 4,
  },
  selectedButton: {
    backgroundColor: "#003366",
  },
  unselectedButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  selectedText: {
    color: "#FFFFFF",
  },
  unselectedText: {
    color: "#003366",
  },
  buttonText: {
    fontSize: 16,
  },
});

export default styles;
