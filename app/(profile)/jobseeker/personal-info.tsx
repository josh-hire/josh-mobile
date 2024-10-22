import { router, Stack } from "expo-router";
import PersonalInfoProfilePage from "@modules/feature/main/personalInfoPage";
import { Colors } from "@constants/Colors";
import { HeaderBackButton } from "@react-navigation/elements";
import ConfirmationModal from "@/components/molecules/modal/ConfirmationModal";
import { useState } from "react";

export default function PersonalInformationScreen() {
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Personal Information",
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
      <PersonalInfoProfilePage />
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
