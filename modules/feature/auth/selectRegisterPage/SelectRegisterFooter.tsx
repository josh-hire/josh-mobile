import { Link } from "expo-router";
import { View } from "react-native";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import styles from "@modules/feature/auth/selectRegisterPage/selectRegist.styles";

export default function SelectRegisterFooter() {
  return (
    <View style={styles.haveAccountContainer}>
      <HeadingText type="h6" fontWeight="bold">
        Already have an account?
      </HeadingText>
      <Link href="/(auth)/select-login">
        <HeadingText type="h6" color="red" fontWeight="bold">
          Sign In
        </HeadingText>
      </Link>
    </View>
  );
}
