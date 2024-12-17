import { View } from "react-native";
import ResetPasswordHeader from "@modules/feature/auth/resetPasswords/resetPasswordPage/ResetPasswordHeader";
import ResetPasswordForm from "@components/molecules/form/ResetPasswordForm";
import styles from "@styles/global.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPasswordPage() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.stepContainer}>
        <ResetPasswordHeader />
        <ResetPasswordForm />
      </View>
    </SafeAreaView>
  );
}
