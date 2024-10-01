import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/resetPasswords/forgotPasswordPage/forgotPassword.styles";

export default function ForgotPasswordHeader() {
  return (
    <View style={styles.container}>
      <HeadingText type="h1" fontWeight="bold" textAlign="center">
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