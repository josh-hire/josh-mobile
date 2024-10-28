import { Dispatch, SetStateAction } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/jobPrefSection/profileJobPrefer.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import ProfileJobPrefForm from "@components/molecules/form/ProfileJobPrefForm";

interface ModalJobPrefProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  type: string;
}

export default function ModalJobPref({
  modalVisible,
  setModalVisible,
  type,
}: Readonly<ModalJobPrefProps>) {
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
                Prefered Job
              </HeadingText>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <ProfileJobPrefForm type={type} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
