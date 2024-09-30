import { HeadingText } from "@/components/atoms/text/HeadingText";
import { StyleSheet, View } from "react-native";

export default function ForgotPasswordHeader() {
  return (
    <View style={styles.container}>
      <HeadingText type="h1" fontWeight="bold" textAlign="center">
        All Done!
      </HeadingText>
      <View style={styles.smallContainer}>
        <HeadingText type="h5" textAlign="center">
          your password has been reset. Click below to Sign In.
        </HeadingText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  smallContainer: {
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
