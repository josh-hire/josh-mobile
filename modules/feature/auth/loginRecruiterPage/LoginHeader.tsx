import AppLogo from "@components/atoms/logo/AppLogo";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Image, View } from "react-native";
import styles from "@modules/feature/auth/loginRecruiterPage/login.styles";
import { Assets } from "@constants/Assets";

export default function LoginHeader() {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.imageBackground}>
        <Image
          style={styles.imageBackground}
          source={Assets.images.loginRecruiter}
        ></Image>
      </View>
      <View style={styles.appLogo}>
        <AppLogo color="white" />
        <HeadingText color="white" type="h3">
          Swipe & Hiring
        </HeadingText>
      </View>
    </View>
  );
}
