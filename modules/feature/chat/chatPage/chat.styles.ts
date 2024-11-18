import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: Colors.secondary.s08,
    height: "100%",
  },
  chatContainer: {
    paddingBottom: 18,
    paddingTop: 6,
    paddingHorizontal: 32,
    gap: 18,
  },
  headerContainer: {
    backgroundColor: Colors.secondary.s08,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});

export default styles;
