import { Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "@modules/feature/auth/selectLoginPage/selectLogin.styles";
import SelectLoginHeader from "@modules/feature/auth/selectLoginPage/SelectLoginHeader";
import SelectLoginBody from "@modules/feature/auth/selectLoginPage/SelectLoginBody";
import SelectLoginFooter from "@modules/feature/auth/selectLoginPage/SelectLoginFooter";
import { Assets } from "@constants/Assets";

export default function SelectLoginPage() {
  return (
    <ImageBackground source={Assets.images.bgMotif} style={styles.background}>
      <SafeAreaView style={styles.page}>
        <View>
          <SelectLoginHeader />
          <SelectLoginBody />
        </View>
        <SelectLoginFooter />
      </SafeAreaView>
    </ImageBackground>
  );
}
