import { ImageBackground, View } from "react-native";
import WorkPreferencesHeader from "@modules/feature/auth/registrations/workingPreferencesPage/WorkPreferencesHeader";
import WorkPreferencesForm from "@components/molecules/form/workPreferencesForm";
import styles from "@styles/global.styles";
import WorkPreferencesFooter from "@modules/feature/auth/registrations/workingPreferencesPage/WorkPreferencesFooter";
import { SafeAreaView } from "react-native-safe-area-context";
import { Assets } from "@constants/Assets";

export default function WorkPreferencesPage() {
  return (
    <ImageBackground source={Assets.images.bgMotif}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.stepContainer}>
          <WorkPreferencesHeader />
          <WorkPreferencesForm />
        </View>
        <WorkPreferencesFooter />
      </SafeAreaView>
    </ImageBackground>
  );
}
