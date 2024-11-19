import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: Colors.secondary.s08,
  },
  activityContainer: {
    gap: 18,
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
