import { HeadingText } from "@components/atoms/text/HeadingText";
import { Link } from "expo-router";
import { View } from "react-native";
import styles from "@modules/feature/auth/loginPage/login.styles";

export default function LoginFooter() {
  return (
    <>
      <View style={styles.haveAccountContainer}>
        <HeadingText type="h6" fontWeight="bold">
          Don't Have An Account?
        </HeadingText>
        <Link href="/(auth)/jobseeker/register">
          <HeadingText type="h6" color="red" fontWeight="bold">
            Sign Up
          </HeadingText>
        </Link>
      </View>
    </>
  );
}