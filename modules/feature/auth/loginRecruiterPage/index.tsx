import { View } from "react-native";
import LoginForm from "@components/molecules/form/LoginForm";
import LoginFooter from "@modules/feature/auth/loginRecruiterPage/LoginFooter";
import LoginHeader from "@modules/feature/auth/loginRecruiterPage/LoginHeader";
import styles from "@styles/global.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.stepContainer}>
        <LoginHeader />
        <LoginForm />
      </View>
      <LoginFooter />
    </SafeAreaView>
  );
}
