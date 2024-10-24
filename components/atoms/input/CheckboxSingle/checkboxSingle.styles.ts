import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    flex: 1,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: Colors.neutral.n09,
    marginRight: 10,
  },
  checkboxError: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: Colors.primary.p04,
    marginRight: 10,
  },
  checkboxChecked: {
    width: 18,
    height: 18,
    borderColor: Colors.neutral.n09,
    marginRight: 10,
  },
  checked: {
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary.s05,
  },
  label: {
    fontSize: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});

export default styles;
