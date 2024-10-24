import { Colors } from "@constants/Colors";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { View } from "react-native";
import styles from "@modules/feature/main/profileProfessionalInfoPage/sections/educationSection/educationSection.styles";
import SecondaryButton from "@components/atoms/button/SecondaryButton";
import ModalEducation from "@modules/feature/main/profileProfessionalInfoPage/sections/educationSection/modalEducation";

export default function EducationSection() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.educationContainer}>
      <HeadingText type="h6" color={Colors.neutral.n00}>
        To strengthen your profile, be sure to provide comprehensive details
        about your educational qualifications.
      </HeadingText>
      <SecondaryButton
        title="Add Education"
        handler={() => {
          setModalVisible(true);
        }}
        color="white"
        position="right"
      />
      <ModalEducation
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
