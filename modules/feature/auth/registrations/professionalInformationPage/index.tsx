import { ImageBackground, View } from "react-native";
import ProfessionalInformationHeader from "@modules/feature/auth/registrations/professionalInformationPage/ProfessionalInformationHeader";
import ProfessionalInformationForm from "@components/molecules/form/ProfessionalInformationForm";
import globalStyles from "@styles/global.styles";
import ProfessionalInformationFooter from "@modules/feature/auth/registrations/professionalInformationPage/ProfessionalInformationFooter";
import { SafeAreaView } from "react-native-safe-area-context";
import { Assets } from "@/constants/Assets";

export default function ProfessionalInformationPage() {
  return (
    <ImageBackground source={Assets.images.bgMotif}>
      <SafeAreaView style={globalStyles.screen}>
        <View style={globalStyles.stepContainer}>
          <ProfessionalInformationHeader />
          <ProfessionalInformationForm />
        </View>
        <ProfessionalInformationFooter />
      </SafeAreaView>
    </ImageBackground>
  );
}
