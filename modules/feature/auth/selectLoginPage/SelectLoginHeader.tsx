import AppLogo from "@components/atoms/logo/AppLogo";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/selectLoginPage/selectLogin.styles";

export default function SelectLoginHeader() {
  return (
    <View style={styles.titleContainer}>
      <AppLogo />
      <HeadingText type="h3">
        Swipe & Hiring
      </HeadingText>
    </View>
  );
}
