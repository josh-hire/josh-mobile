import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/resetPasswords/successForgotPasswordPage/successForgot.styles"

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
