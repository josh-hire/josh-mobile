import {
  BackHandler,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/main/personalInfoPage/personalInfo.styles";
import { Assets } from "@constants/Assets";
import PersonalInfoForm from "@components/molecules/form/PersonalInfoForm";
import ProfileEditPhoto from "@components/atoms/chat/profileEdit";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import ConfirmationModal from "@/components/molecules/modal/ConfirmationModal";
import { HeadingText } from "@/components/atoms/text/HeadingText";

export default function PersonalInfoProfilePage() {
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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
      <ProfileEditPhoto
        url={Assets.images.telkomselLogo}
        size={120}
        handler={() => {
          setModalVisible(true);
        }}
      />
      <PersonalInfoForm />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.bottomView}
          onPress={() => setModalVisible(false)}
        >
          <TouchableOpacity activeOpacity={1} style={styles.modalView}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            ></Pressable>
            <View style={styles.optionContainer}>
              <TouchableOpacity style={styles.optionButton}>
                <HeadingText type="h6">Take a picture</HeadingText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <HeadingText type="h6">Choose from gallery</HeadingText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionBottomButton}>
                <HeadingText type="h6">Delete Photo</HeadingText>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

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
