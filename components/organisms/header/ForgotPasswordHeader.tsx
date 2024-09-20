import { HeadingText } from "@/components/atoms/text/HeadingText";
import { StyleSheet, View } from "react-native";

export default function ForgotPasswordHeader() {
  return (
    <View style={styles.container}>
      <HeadingText type="h1" fontWeight="bold">
        Forgot Password?
      </HeadingText>
      <View style={styles.smallContainer}>
        <HeadingText type="h6" textAlign="center">
          No worries, we will send you reset password instruction
        </HeadingText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 36,
    justifyContent: "center",
    alignItems: "center",
},
smallContainer: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
