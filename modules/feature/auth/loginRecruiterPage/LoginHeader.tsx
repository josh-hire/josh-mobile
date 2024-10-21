import AppLogo from "@components/atoms/logo/AppLogo";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/loginRecruiterPage/login.styles";

export default function LoginHeader() {
  return (
    <View style={styles.titleContainer}>
      <AppLogo />
      <HeadingText type="h6" textAlign="center">Ready to hire the best? Log in and find top candidates</HeadingText>
    </ View>
  );
}