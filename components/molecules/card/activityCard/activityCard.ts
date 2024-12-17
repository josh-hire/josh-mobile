import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: "48%",
    borderRadius: 20,
    marginBottom: 14,
  },
  contentContainer: {
    justifyContent: "flex-end",
    borderRadius: 20,
    overflow: "hidden",
    flex: 1,
    padding: 12,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

export default styles;
