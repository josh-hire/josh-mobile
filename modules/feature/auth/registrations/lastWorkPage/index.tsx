import LastWorkHeader from "@modules/feature/auth/registrations/lastWorkPage/LastWorkHeader";
import LastWorkForm from "@components/molecules/form/LastWorkForm";
import { ImageBackground, View } from "react-native";
import styles from "@styles/global.styles";
import LastWorkFooter from "@modules/feature/auth/registrations/lastWorkPage/LastWorkFooter";
import { Assets } from "@constants/Assets";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LastWorkPage() {
  return (
    <ImageBackground source={Assets.images.bgMotif}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.stepContainer}>
          <LastWorkHeader />
          <LastWorkForm />
        </View>
        <LastWorkFooter />
      </SafeAreaView>
    </ImageBackground>
  );
}
