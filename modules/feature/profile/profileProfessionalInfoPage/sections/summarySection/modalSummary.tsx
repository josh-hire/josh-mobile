import { Dispatch, SetStateAction } from "react";
import { Image, Modal, TextInput, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/summarySection/summarySection.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";

interface ModalSummaryProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  summary: string;
  setSummary: Dispatch<SetStateAction<string>>;
}

export default function ModalSummary({
  modalVisible,
  setModalVisible,
  summary,
  setSummary,
}: Readonly<ModalSummaryProps>) {
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
                Summary
              </HeadingText>
            </View>
            <HeadingText type="h5" color="white">
              0/800
            </HeadingText>
          </View>
          <View style={styles.bodyContainer}>
            <TextInput
              style={styles.textArea}
              onChangeText={setSummary}
              value={summary}
              placeholder={
                "Please tell us about your experience, other people tell about their achievements and previous job experiences"
              }
              inputMode="text"
              placeholderTextColor="#999"
              multiline={true}
              numberOfLines={5}
            />
            <PrimaryButton title="Save" handler={() => {}} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
