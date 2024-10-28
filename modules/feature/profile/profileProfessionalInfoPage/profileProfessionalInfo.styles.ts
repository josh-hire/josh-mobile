import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Colors.secondary.s08,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12 ,
  },
  horizontalScroll: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary.s06,
    maxHeight: 40,
  },
});

export default styles;
