import SecondaryButton from "@components/atoms/button/SecondaryButton";
import { View } from "react-native";
import styles from "@modules/feature/main/profileProfessionalInfoPage/sections/workExpSection/workExpSection.styles";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Colors } from "@constants/Colors";
import ModalWorkExp from "@modules/feature/main/profileProfessionalInfoPage/sections/workExpSection/modalWorkExp";
import { useState } from "react";

export default function WorkExperienceSection() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.workExpContainer}>
      <HeadingText type="h6" color={Colors.neutral.n00}>
        To enhance your profile, make sure to include detailed information about
        your work experience.
      </HeadingText>
      <SecondaryButton
        title="Add Work Experience"
        handler={() => {
          setModalVisible(true);
        }}
        color="white"
        position="right"
      />
      <ModalWorkExp
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
