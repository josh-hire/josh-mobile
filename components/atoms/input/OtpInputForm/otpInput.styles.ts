import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInputHidden: {
    width: 300,
    borderColor: "#e5e5e5",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    opacity: 0,
    position: "absolute",
  },
  splitOTPBoxesContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  splitBoxes: {
    borderColor: Colors.neutral.n09,
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    minWidth: 42,
  },
  splitBoxesFocused: {
    borderColor: Colors.secondary.s07,
    borderWidth: 3,
    borderRadius: 8,
    padding: 5,
    minWidth: 42,
  },
  splitBoxesFilled: {
    borderColor: Colors.secondary.s07,
    backgroundColor: Colors.secondary.s07,
    borderWidth: 3,
    borderRadius: 8,
    padding: 5,
    minWidth: 42,
  },
  splitBoxesError: {
    borderColor: Colors.primary.p04,
    borderWidth: 3,
    borderRadius: 8,
    padding: 5,
    minWidth: 42,
  },
  splitBoxesText: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.neutral.n00,
  },
  splitBoxesTextError: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.neutral.n09,
  },
});

export default styles;
