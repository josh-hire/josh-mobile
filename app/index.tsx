import { SafeAreaView, StyleSheet, View } from "react-native";

import { Link } from "expo-router";
import { HeadingText } from "@/components/atoms/text/HeadingText";

export default function OnboardingScreen() {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <HeadingText type="h4">Welcome Onboard!</HeadingText>
      </View>
      <Link href={"/(auth)/login"}>Login</Link>
      <Link href={"/(auth)/register"}>Register</Link>
      <Link href="/(auth)/verification">
        <HeadingText type="h2">Verification</HeadingText>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 28,
  },
});
