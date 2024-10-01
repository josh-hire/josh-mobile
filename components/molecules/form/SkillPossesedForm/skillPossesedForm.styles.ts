import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  label: {
    marginVertical: 12,
  },
  selectedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  availableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  column: {
    width: "50%",
    padding: 10,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default styles;