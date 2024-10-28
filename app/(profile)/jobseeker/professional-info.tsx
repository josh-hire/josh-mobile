import { router, Stack } from "expo-router";
import { Colors } from "@constants/Colors";
import { HeaderBackButton } from "@react-navigation/elements";
import ConfirmationModal from "@components/molecules/modal/ConfirmationModal";
import { useState } from "react";
import ProfileProfessionalInfoPage from "@modules/feature/profile/profileProfessionalInfoPage";

export default function ProfileProfessionalInformationScreen() {
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Professional Information",
          headerShadowVisible: false,
          headerTintColor: Colors.neutral.n00,
          headerLeft: () => (
            <HeaderBackButton
              tintColor="white"
              onPress={() => setIsConfirmVisible(true)}
            />
          ),
          headerTitleStyle: {
            color: Colors.neutral.n00,
          },
          headerStyle: {
            backgroundColor: Colors.secondary.s08,
          },
        }}
      />
      <ProfileProfessionalInfoPage />
      <ConfirmationModal
        title="Cancel all edits?"
        description="everything you change will be saved"
        handleCloseModal={() => router.back()}
        isConfirmVisible={isConfirmVisible}
        setIsConfirmVisible={setIsConfirmVisible}
      />
    </>
  );
}
