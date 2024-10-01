import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/resetPasswords/resetPasswordPage/resetPassword.styles";

export default function ResetPassword() {
  return (
    <View style={styles.container}>
      <HeadingText type="h1" fontWeight="bold" textAlign="center">
        Set new password
      </HeadingText>
      <View style={styles.smallContainer}>
        <HeadingText type="h6" textAlign="center">
          your new password must be different from previous used passwords
        </HeadingText>
      </View>
    </View>
  );
}