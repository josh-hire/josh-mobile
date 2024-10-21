import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/workingPreferencesPage/workingPreferences.styles";
import ProgressStep from "@components/atoms/step/ProgressStep";

export default function WorkPreferencesFooter() {
  return (
    <View style={styles.containerFooter}>
      <ProgressStep n={5} position={2}></ProgressStep>
    </View>
  );
}
