import { StyleSheet } from "react-native";

const styles = (isLast: boolean) =>
  StyleSheet.create({
    cardContainer: {
      paddingVertical: 12,
      flexDirection: "row",
      borderBottomWidth: isLast ? 0 : 1,
      borderBottomColor: "white",
      justifyContent: "space-between",
    },
    rowContainer: {
      flexDirection: "row",
      gap: 12,
    },
  });

export default styles;
