import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = (isSender: boolean) =>
  StyleSheet.create({
    chatContainer: {
      backgroundColor: isSender ? Colors.secondary.s02 : Colors.secondary.s07,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomLeftRadius: isSender ? 8 : 0,
      borderBottomRightRadius: isSender ? 0 : 8,
      padding: 12,
      alignSelf: isSender ? "flex-end" : "flex-start",
      maxWidth: "85%",
      minWidth: "30%",
    },
    rowContainer: {
      marginTop: 4,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

export default styles;
