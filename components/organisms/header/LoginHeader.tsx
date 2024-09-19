import AppLogo from "@/components/atoms/logo/AppLogo";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import { StyleSheet, View } from "react-native";

export default function LoginHeader() {
  return (
    <View style={styles.titleContainer}>
      <AppLogo />
      <HeadingText type="h6">Swipe & Hiring</HeadingText>
    </ View>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
  