import { View } from "react-native";
import ResetPasswordHeader from "@/modules/feature/auth/resetPasswords/resetPasswordPage/ResetPasswordHeader";
import ResetPasswordForm from "@components/molecules/form/ResetPasswordForm";
import styles from "@styles/global.styles";

export default function ResetPasswordPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <ResetPasswordHeader />
        <ResetPasswordForm />
      </View>
    </View>
  );
}