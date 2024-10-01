import AppLogo from "@components/atoms/logo/AppLogo";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/educationBackgroundPage/educationBackground.styles"

export default function EducationBackgroundHeader() {
  return (
    <View style={styles.titleContainer}>
      <AppLogo />
      <HeadingText type="h4" fontWeight="bold">Education Background</HeadingText>
    </View>
  );
}