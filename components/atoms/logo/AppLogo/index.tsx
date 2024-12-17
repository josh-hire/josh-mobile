import { Image, View } from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import styles from "@components/atoms/logo/AppLogo/appLogo.styles";

interface AppLogoInterface {
  color?: string;
}

export default function AppLogo({
  color = "white",
}: Readonly<AppLogoInterface>) {
  return (
    <View style={styles.logoContainer}>
      <Image source={Assets.logos.logo}></Image>
      <HeadingText type="h2" color={color ?? ""} fontWeight="bold">
        JOSH
      </HeadingText>
    </View>
  );
}
