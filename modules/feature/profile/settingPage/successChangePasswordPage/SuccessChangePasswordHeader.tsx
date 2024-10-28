import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/profile/settingPage/successChangePasswordPage/successChange.styles";

export default function ForgotPasswordHeader() {
  return (
    <View style={styles.container}>
      <HeadingText type="h1" fontWeight="bold" textAlign="center" color="white">
        All Done!
      </HeadingText>
      <View style={styles.smallContainer}>
        <HeadingText type="h5" textAlign="center" color="white">
          your password has been reset. Click below to back home.
        </HeadingText>
      </View>
    </View>
  );
}
