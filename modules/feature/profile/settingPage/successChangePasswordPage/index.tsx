import { View } from "react-native";
import SuccessForgotPasswordHeader from "@modules/feature/profile/settingPage/successChangePasswordPage/SuccessChangePasswordHeader";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { useRouter } from "expo-router";
import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/profile/settingPage/successChangePasswordPage/successChange.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingSuccessChangePasswordPage() {
  const router = useRouter();

  const handleSubmit = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView style={[globalStyles.screen, styles.screenBackground]}>
      <View style={styles.stepContainer}>
        <SuccessForgotPasswordHeader />
        <PrimaryButton title="Back Home" handler={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}
