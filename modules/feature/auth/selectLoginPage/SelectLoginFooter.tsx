import { Link } from "expo-router";
import { View } from "react-native";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import styles from "@modules/feature/auth/selectLoginPage/selectLogin.styles";

export default function SelectLoginFooter() {
  return (
    <View style={styles.haveAccountContainer}>
      <HeadingText type="h6" fontWeight="bold">
        Don't have an account?
      </HeadingText>
      <Link href="/(auth)/select-register">
        <HeadingText type="h6" color="red" fontWeight="bold">
          Sign Up
        </HeadingText>
      </Link>
    </View>
  );
}
