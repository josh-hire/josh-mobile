import { View } from "react-native";
import ProfessionalInformationHeader from "@modules/feature/auth/registrations/professionalInformationPage/ProfessionalInformationHeader";
import ProfessionalInformationForm from "@components/molecules/form/ProfessionalInformationForm";
import styles from "@styles/global.styles";

export default function ProfessionalInformationPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <ProfessionalInformationHeader />
        <ProfessionalInformationForm />
      </View>
    </View>
  );
}
