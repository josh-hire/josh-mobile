import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Colors.general.background,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  profileContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  subtitleText: {
    marginBottom: 8,
  },
  summaryContainer: {
    padding: 20,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 12,
  },
});

export default styles;
