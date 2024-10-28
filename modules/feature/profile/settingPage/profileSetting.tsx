import { HeadingText } from "@components/atoms/text/HeadingText";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/settingPage/setting.styles";
import { Assets } from "@constants/Assets";
import { useState } from "react";
import DeleteAccount from "@modules/feature/profile/settingPage//sections/delete-account";
import ChangePassword from "@modules/feature/profile/settingPage//sections/change-password";
import ChangeLanguage from "@modules/feature/profile/settingPage//sections/change-language";

export default function ProfileSetting() {
  const [modalDeleteVisible, setModalDeleteVisible] = useState<boolean>(false);
  const [modalLanguageVisible, setModalLanguageVisible] =
    useState<boolean>(false);
  const [modalPasswordVisible, setModalPasswordVisible] =
    useState<boolean>(false);

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          onPress={() => setModalPasswordVisible(true)}
          style={styles.optionButton}
        >
          <HeadingText type="h6" color="white">
            Change Password
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalLanguageVisible(true)} style={styles.optionButton}>
          <HeadingText type="h6" color="white">
            Language
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalDeleteVisible(true)}
          style={styles.optionBottomButton}
        >
          <HeadingText type="h6" color="white">
            Delete Account
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
      </View>
      <DeleteAccount
        modalVisible={modalDeleteVisible}
        setModalVisible={setModalDeleteVisible}
      />
      <ChangeLanguage
        modalVisible={modalLanguageVisible}
        setModalVisible={setModalLanguageVisible}
      />
      <ChangePassword
        modalVisible={modalPasswordVisible}
        setModalVisible={setModalPasswordVisible}
      />
    </View>
  );
}
