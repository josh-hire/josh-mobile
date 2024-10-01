import { View } from "react-native";
import RegisterHeader from "@modules/feature/auth/registrations/registrationPage/RegisterHeader";
import RegisterFooter from "@modules/feature/auth/registrations/registrationPage/RegisterFooter";
import RegisterForm from "@components/molecules/form/RegisterForm";
import styles from "@styles/global.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterPage() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.stepContainer}>
        <RegisterHeader />
        <RegisterForm />
      </View>
      <RegisterFooter />
    </SafeAreaView>
  );
}