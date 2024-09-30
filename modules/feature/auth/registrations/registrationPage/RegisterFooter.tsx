import { HeadingText } from "@components/atoms/text/HeadingText";
import { Link } from "expo-router";
import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/registrationPage/registration.styles"

export default function RegisterFooter() {
  return (
    <View style={styles.haveAccountContainer}>
      <HeadingText type="h6" fontWeight="bold">
        Already Have An Account?
      </HeadingText>
      <Link href="/(auth)/login">
        <HeadingText type="h6" color="red" fontWeight="bold">
          Sign In
        </HeadingText>
      </Link>
    </View>
  );
}