import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Colors.secondary.s08,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  stepContainer: {
    gap: 64,
  },
  container: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  smallContainer: {
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
