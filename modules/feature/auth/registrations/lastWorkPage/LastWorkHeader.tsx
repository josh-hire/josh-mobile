import AppLogo from "@components/atoms/logo/AppLogo";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/lastWorkPage/lastWork.styles"

export default function LastWorkHeader() {
  return (
    <View style={styles.titleContainer}>
      <AppLogo />
      <HeadingText type="h4" fontWeight="bold">Recent Work Experience</HeadingText>
    </View>
  );
}