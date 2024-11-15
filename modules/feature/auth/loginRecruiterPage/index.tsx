import { View } from "react-native";
import LoginForm from "@components/molecules/form/LoginForm";
import LoginHeader from "@modules/feature/auth/loginRecruiterPage/LoginHeader";
import styles from "@modules/feature/auth/loginPage/login.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeadingText } from "@components/atoms/text/HeadingText";

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <LoginHeader />
        <View style={styles.rounded} />
        <View style={styles.bodyContainer}>
          <HeadingText type="h5" textAlign="center">
            Ready to hire the best? Log in and find top candidates.
          </HeadingText>
          <LoginForm />
        </View>
      </View>
    </SafeAreaView>
  );
}
