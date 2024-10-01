import { View } from "react-native";
import ProfessionalInformationHeader from "@modules/feature/auth/registrations/professionalInformationPage/ProfessionalInformationHeader";
import ProfessionalInformationForm from "@components/molecules/form/ProfessionalInformationForm";
import globalStyles from "@styles/global.styles";
import ProfessionalInformationFooter from "@modules/feature/auth/registrations/professionalInformationPage/ProfessionalInformationFooter";

export default function ProfessionalInformationPage() {
  return (
    <View style={globalStyles.screen}>
        <View style={globalStyles.stepContainer}>
          <ProfessionalInformationHeader />
          <ProfessionalInformationForm />
        </View>
      <ProfessionalInformationFooter />
    </View>
  );
}
