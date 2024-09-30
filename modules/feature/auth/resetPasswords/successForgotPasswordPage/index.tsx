import { StyleSheet, View } from "react-native";
import SuccessForgotPasswordHeader from "@components/organisms/header/SuccessForgotPasswordHeader";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { useRouter } from "expo-router";
import styles from "@modules/feature/auth/resetPasswords/successForgotPasswordPage/successForgot.styles"

export default function SuccessForgotPasswordPage() {
  const router = useRouter();

  const handleSubmit = () => {
    router.replace("/(auth)/success-forgot-password");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <SuccessForgotPasswordHeader />
        <PrimaryButton title="Sign In" handler={handleSubmit} />
      </View>
    </View>
  );
}
