import ProfessionalInformationPage from "@modules/feature/auth/registrations/professionalInformationPage";
import { Colors } from "@constants/Colors";
import { Stack } from "expo-router";
import React from "react";

export default function ProfessionalInformation() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: "",
        }}
      />
      <ProfessionalInformationPage />
    </>
  );
}
