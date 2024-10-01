import EducationBackgroundHeader from "@modules/feature/auth/registrations/educationBackgroundPage/EducationBackgroundHeader";
import EducationBackgroundForm from "@components/molecules/form/EducationBackgroundForm";
import { View } from "react-native";
import styles from "@styles/global.styles";


export default function EducationBackgroundPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <EducationBackgroundHeader />
        <EducationBackgroundForm />
      </View>
    </View>
  );
}
