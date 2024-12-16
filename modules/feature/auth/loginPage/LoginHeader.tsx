import AppLogo from "@components/atoms/logo/AppLogo";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/loginPage/login.styles";

export default function LoginHeader() {
  return (
    <View style={styles.titleContainer}>
      <AppLogo color="white" />
      <HeadingText color="white" type="h3">
        Swipe & Hiring
      </HeadingText>
    </View>
  );
}
