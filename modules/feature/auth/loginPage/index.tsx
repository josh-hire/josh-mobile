import { View } from "react-native";
import LoginForm from "@components/molecules/form/LoginForm";
import LoginFooter from "@modules/feature/auth/loginPage/LoginFooter";
import LoginHeader from "@modules/feature/auth/loginPage/LoginHeader";
import styles from "@styles/global.styles";

export default function LoginPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <LoginHeader />
        <LoginForm />
      </View>
      <LoginFooter />
    </View>
  );
}
