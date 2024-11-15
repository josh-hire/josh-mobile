import { View } from "react-native";
import LoginForm from "@components/molecules/form/LoginForm";
import LoginFooter from "@modules/feature/auth/loginPage/LoginFooter";
import LoginHeader from "@modules/feature/auth/loginPage/LoginHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@modules/feature/auth/loginPage/login.styles";
import { HeadingText } from "@components/atoms/text/HeadingText";

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <LoginHeader />
        <View style={styles.rounded} />
        <View style={styles.bodyContainer}>
          <HeadingText type="h5" textAlign="center">
            Ready to find a job? Log in and see the opportunity.
          </HeadingText>
          <LoginForm />
        </View>
      </View>
      <LoginFooter />
    </SafeAreaView>
  );
}
