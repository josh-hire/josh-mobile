import { View } from "react-native";
import SuccessForgotPasswordHeader from "@modules/feature/auth/resetPasswords/successForgotPasswordPage/SuccessForgotPasswordHeader";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { useRouter } from "expo-router";
import styles from "@styles/global.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SuccessForgotPasswordPage() {
  const router = useRouter();

  const handleSubmit = () => {
    router.replace("/(auth)/success-forgot-password");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.stepContainer}>
        <SuccessForgotPasswordHeader />
        <PrimaryButton title="Sign In" handler={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}
