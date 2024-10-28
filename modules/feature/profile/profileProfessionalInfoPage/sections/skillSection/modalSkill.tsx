import { Dispatch, SetStateAction } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/skillSection/profileSkill.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import ProfileSkillForm from "@components/molecules/form/ProfileSkillForm";

interface ModalSkillProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ModalSkill({
  modalVisible,
  setModalVisible,
}: Readonly<ModalSkillProps>) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftHeaderContainer}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image source={Assets.icons.no} style={styles.closeButton} />
              </TouchableOpacity>
              <HeadingText type="h5" fontWeight="bold" color="white">
                Skill & Awards
              </HeadingText>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <ProfileSkillForm />
          </View>
        </View>
      </View>
    </Modal>
  );
}
