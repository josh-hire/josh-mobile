import { HeadingText } from "@components/atoms/text/HeadingText";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/profilePage/profile.styles";
import { Assets } from "@constants/Assets";
import { router } from "expo-router";
import ConfirmationModal from "@/components/molecules/modal/ConfirmationModal";
import { useState } from "react";

export default function ProfileAccount() {
  const [signoutModalVisible, setSignoutModalVisible] =
    useState<boolean>(false);

  return (
    <View style={styles.sectionContainer}>
      <HeadingText type="h5" color="white" fontWeight="bold">
        Account
      </HeadingText>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          onPress={() => {
            router.push("/(profile)/jobseeker/setting");
          }}
          style={styles.optionButton}
        >
          <HeadingText type="h6" color="white">
            Setting
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSignoutModalVisible(true)}
          style={styles.optionBottomButton}
        >
          <HeadingText type="h6" color="white">
            Logout
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
      </View>
      <ConfirmationModal
        title="Sign Out"
        description="Are you sure want to sign out"
        isConfirmVisible={signoutModalVisible}
        setIsConfirmVisible={setSignoutModalVisible}
        handleCloseModal={() => setSignoutModalVisible(false)}
      />
    </View>
  );
}
