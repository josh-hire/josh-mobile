import EducationBackgroundHeader from "@modules/feature/auth/registrations/educationBackgroundPage/EducationBackgroundHeader";
import EducationBackgroundForm from "@components/molecules/form/EducationBackgroundForm";
import { View } from "react-native";
import styles from "@styles/global.styles";
import EducationBackgroundFooter from "@modules/feature/auth/registrations/educationBackgroundPage/EducationBackgroundFooter";


export default function EducationBackgroundPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <EducationBackgroundHeader />
        <EducationBackgroundForm />
      </View>
      <EducationBackgroundFooter />
    </View>
  );
}
