import EducationBackgroundHeader from "@modules/feature/auth/registrations/educationBackgroundPage/EducationBackgroundHeader";
import EducationBackgroundForm from "@components/molecules/form/EducationBackgroundForm";
import { ImageBackground, View } from "react-native";
import styles from "@styles/global.styles";
import EducationBackgroundFooter from "@modules/feature/auth/registrations/educationBackgroundPage/EducationBackgroundFooter";
import { SafeAreaView } from "react-native-safe-area-context";
import { Assets } from "@constants/Assets";

export default function EducationBackgroundPage() {
  return (
    <ImageBackground source={Assets.images.bgMotif}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.stepContainer}>
          <EducationBackgroundHeader />
          <EducationBackgroundForm />
        </View>
        <EducationBackgroundFooter />
      </SafeAreaView>
    </ImageBackground>
  );
}
