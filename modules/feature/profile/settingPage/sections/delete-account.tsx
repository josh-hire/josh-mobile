import { Dispatch, SetStateAction } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/settingPage/setting.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { Colors } from "@constants/Colors";

interface DeleteAccountProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function DeleteAccount({
  modalVisible,
  setModalVisible,
}: Readonly<DeleteAccountProps>) {
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
                Delete Account
              </HeadingText>
            </View>
          </View>
          <View style={[styles.bodyContainer, {marginTop: 12}]}>
            <HeadingText
              type="h6"
              color={Colors.neutral.n02}
              textAlign="justify"
            >
              Deleting your account will permanently remove all your activities,
              including job applications, as well as your personal and
              professional data. Once deleted, this information cannot be
              recovered
            </HeadingText>
            <PrimaryButton title="Delete Account" handler={() => {}} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
