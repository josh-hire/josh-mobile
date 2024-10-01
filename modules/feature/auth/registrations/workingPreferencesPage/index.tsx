import { View } from "react-native";
import WorkPreferencesHeader from "@modules/feature/auth/registrations/workingPreferencesPage/WorkPreferencesHeader";
import WorkPreferencesForm from "@components/molecules/form/workPreferencesForm";
import styles from "@styles/global.styles";

export default function WorkPreferencesPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <WorkPreferencesHeader />
        <WorkPreferencesForm />
      </View>
    </View>
  );
}
