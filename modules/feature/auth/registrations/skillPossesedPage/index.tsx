import { ImageBackground, View } from "react-native";
import SkillPossesedHeader from "@modules/feature/auth/registrations/skillPossesedPage/SkillPossesedHeader";
import SkillPossesedForm from "@components/molecules/form/SkillPossesedForm";
import styles from "@styles/global.styles";
import SkillPossesedFooter from "@modules/feature/auth/registrations/skillPossesedPage/SkillPossesedFooter";
import { SafeAreaView } from "react-native-safe-area-context";
import { Assets } from "@/constants/Assets";

export default function SkillPossesedPage() {
  return (
    <ImageBackground source={Assets.images.bgMotif}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.stepContainer}>
          <SkillPossesedHeader />
          <SkillPossesedForm />
        </View>
        <SkillPossesedFooter />
      </SafeAreaView>
    </ImageBackground>
  );
}
