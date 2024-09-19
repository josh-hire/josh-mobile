import { StyleSheet, View } from "react-native";
import { HeadingText } from "../text/HeadingText";

export default function AppLogo() {
  return (
    <View style={styles.titleContainer}>
      <HeadingText type="h2" fontWeight="bold">
        JOSH
      </HeadingText>
      <HeadingText type="h6">Swipe & Hiring</HeadingText>
    </View>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
  });