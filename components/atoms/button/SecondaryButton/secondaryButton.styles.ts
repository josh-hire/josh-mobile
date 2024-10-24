import { StyleSheet } from "react-native";

const styles = (color: string) =>
  StyleSheet.create({
    secondaryButton: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: color,
      color: color,
      padding: 12,
      gap: 12,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

export default styles;
