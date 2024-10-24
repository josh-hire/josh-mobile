import { Dispatch, SetStateAction } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/main/profileProfessionalInfoPage/sections/workExpSection/workExpSection.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import ProfileWorkExperienceForm from "@components/molecules/form/ProfileWorkExperienceForm";

interface ModalWorkExpProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ModalWorkExp({
  modalVisible,
  setModalVisible,
}: Readonly<ModalWorkExpProps>) {
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
                Work Experience
              </HeadingText>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <ProfileWorkExperienceForm />
          </View>
        </View>
      </View>
    </Modal>
  );
}
