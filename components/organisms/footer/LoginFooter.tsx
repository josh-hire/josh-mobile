import { HeadingText } from "@/components/atoms/text/HeadingText";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function LoginFooter() {
  return (
    <>
      <View style={styles.haveAccountContainer}>
        <HeadingText type="h6" fontWeight="bold">
          Sample OTP Page
        </HeadingText>
        <Link href="/(auth)/verification">
          <HeadingText type="h6" color="red" fontWeight="bold">
            Go
          </HeadingText>
        </Link>
      </View>
      <View style={styles.haveAccountContainer}>
        <HeadingText type="h6" fontWeight="bold">
          Don't Have An Account?
        </HeadingText>
        <Link href="/(auth)/register">
          <HeadingText type="h6" color="red" fontWeight="bold">
            Sign Up
          </HeadingText>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  haveAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});
