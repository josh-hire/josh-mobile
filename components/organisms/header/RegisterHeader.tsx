import AppLogo from "@/components/atoms/logo/AppLogo";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import { StyleSheet, View } from "react-native";

export default function RegisterHeader() {
  return (
    <View style={styles.titleContainer}>
      <AppLogo />
      <HeadingText type="h3">Create Your Account</HeadingText>
      <HeadingText type="label">and become a mamber to see job opportunity</HeadingText>
    </ View>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
  