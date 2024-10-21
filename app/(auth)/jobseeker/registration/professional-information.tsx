import ProfessionalInformationPage from "@modules/feature/auth/registrations/professionalInformationPage";
import { Colors } from "@constants/Colors";
import { Stack } from "expo-router";

export default function ProfessionalInformation() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: ''
        }}
      />
      <ProfessionalInformationPage />
    </>
  );
}
