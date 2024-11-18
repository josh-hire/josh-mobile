import { StyleSheet } from "react-native";

const styles = (isLast: boolean) =>
  StyleSheet.create({
    cardContainer: {
      paddingVertical: 12,
      flexDirection: "row",
      gap: 12,
      borderBottomWidth: isLast ? 0 : 1,
      borderBottomColor: "white",
    },
  });

export default styles;
