import { StyleSheet, View } from "react-native";
import SuccessForgotPasswordHeader from "../../organisms/header/SuccessForgotPasswordHeader";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { useRouter } from "expo-router";

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

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 36,
    paddingTop: 48,
    height: "100%",
    backgroundColor: "white",
  },
  stepContainer: {
    gap: 64,
  },
});
