import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/main/profileProfessionalInfoPage/profileProfessionalInfo.styles";
import ConfirmationModal from "@components/molecules/modal/ConfirmationModal";
import ProfilePhoto from "@components/atoms/chat/profile";
import { BackHandler, View } from "react-native";
import { Assets } from "@constants/Assets";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { HeadingText } from "@/components/atoms/text/HeadingText";

export default function ProfileProfessionalInfoPage() {
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);

  useEffect(() => {
    const backAction = () => {
      setIsConfirmVisible(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={[[globalStyles.screen, styles.screenBackground]]}>
      <ProfilePhoto url={Assets.images.telkomselLogo} size={120} />
      <HeadingText type="h6" color="white">See my profile</HeadingText>

      <ConfirmationModal
        title="Cancel all edits?"
        description="everything you change will be saved"
        handleCloseModal={() => router.back()}
        isConfirmVisible={isConfirmVisible}
        setIsConfirmVisible={setIsConfirmVisible}
      />
    </View>
  );
}
