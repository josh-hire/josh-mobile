import { Dispatch, SetStateAction } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/main/profileProfessionalInfoPage/sections/licenseSection/profileLicense.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import ProfileLicenseForm from "@components/molecules/form/ProfileLicenseForm";

interface ModalLicenseProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ModalLicense({
  modalVisible,
  setModalVisible,
}: Readonly<ModalLicenseProps>) {
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
                License & Certification
              </HeadingText>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <ProfileLicenseForm />
          </View>
        </View>
      </View>
    </Modal>
  );
}
