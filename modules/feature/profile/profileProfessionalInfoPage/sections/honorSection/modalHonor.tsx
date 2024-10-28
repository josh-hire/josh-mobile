import { Dispatch, SetStateAction } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/honorSection/profileHonor.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import ProfileHonorForm from "@components/molecules/form/ProfileHonorForm";

interface ModalHonorProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ModalHonor({
  modalVisible,
  setModalVisible,
}: Readonly<ModalHonorProps>) {
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
                Honor & Awards
              </HeadingText>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <ProfileHonorForm />
          </View>
        </View>
      </View>
    </Modal>
  );
}
