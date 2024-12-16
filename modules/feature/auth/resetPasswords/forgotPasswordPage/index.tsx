import { View } from "react-native";
import ForgotPasswordHeader from "@modules/feature/auth/resetPasswords/forgotPasswordPage/ForgotPasswordHeader";
import ForgotPAsswordForm from "@components/molecules/form/ForgotPasswordForm";
import styles from "@styles/global.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordPage() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.stepContainer}>
        <ForgotPasswordHeader />
        <ForgotPAsswordForm />
      </View>
    </SafeAreaView>
  );
}
