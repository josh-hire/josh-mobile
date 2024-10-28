import { Dispatch, SetStateAction, useState } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/settingPage/setting.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import CheckboxList from "@components/atoms/input/Checkbox";

interface ChangeLanguageProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ChangeLanguage({
  modalVisible,
  setModalVisible,
}: Readonly<ChangeLanguageProps>) {
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);

  const submitHandler = () => {
    return selectedLanguage;
  };

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
                Change Language
              </HeadingText>
            </View>
          </View>
          <View style={[styles.bodyContainer, { marginTop: 12 }]}>
            <CheckboxList
              color="white"
              onSelectionChange={setSelectedLanguage}
              data={["English", "Bahasa"]}
            />
            <PrimaryButton title="Save" handler={submitHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
