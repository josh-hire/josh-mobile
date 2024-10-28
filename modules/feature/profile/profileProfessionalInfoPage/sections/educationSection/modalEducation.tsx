import { Dispatch, SetStateAction } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/educationSection/educationSection.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import ProfileEducationForm from "@/components/molecules/form/ProfileEducationForm";

interface ModalEducationProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ModalEducation({
  modalVisible,
  setModalVisible,
}: Readonly<ModalEducationProps>) {
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
                Education
              </HeadingText>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <ProfileEducationForm />
          </View>
        </View>
      </View>
    </Modal>
  );
}
