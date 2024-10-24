import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = (color: string) =>
  StyleSheet.create({
    container: {
      gap: 8,
    },
    dropdown: {
      width: "100%",
      borderWidth: 1,
      borderRadius: 8,
      borderColor: color === "white" ? "white" : Colors.neutral.n09,
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    dropdownError: {
      borderColor: Colors.primary.p04,
      borderWidth: 2,
    },
    overlay: {
      flex: 1,
      justifyContent: "flex-start",
    },
    modalContainer: {
      position: "absolute",
      backgroundColor: color === "white" ? Colors.secondary.s08 : "",
      maxHeight: 300,
      borderColor: Colors.neutral.n02,
    },
    item: {
      padding: 15,
      borderWidth: 1,
      borderColor: Colors.neutral.n02,
    },
    itemPressed: {
      padding: 15,
      borderWidth: 1,
      backgroundColor: Colors.secondary.s05,
      color: Colors.neutral.n01,
      borderColor: Colors.neutral.n02,
    },
    itemText: {},
    itemTextPressed: {
      color: Colors.neutral.n01,
    },
  });

export default styles;
