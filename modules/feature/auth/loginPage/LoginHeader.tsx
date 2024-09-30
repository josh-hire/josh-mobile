import AppLogo from "@components/atoms/logo/AppLogo";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/loginPage/login.styles";

export default function LoginHeader() {
  return (
    <View style={styles.titleContainer}>
      <AppLogo />
      <HeadingText type="h6">Swipe & Hiring</HeadingText>
    </ View>
  );
}