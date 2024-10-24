import { Colors } from "@constants/Colors";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { View } from "react-native";
import styles from "@modules/feature/main/profileProfessionalInfoPage/sections/educationSection/educationSection.styles";
import SecondaryButton from "@components/atoms/button/SecondaryButton";
import ModalEducation from "@modules/feature/main/profileProfessionalInfoPage/sections/educationSection/modalEducation";
import EducationList from "@modules/feature/main/profileProfessionalInfoPage/sections/educationSection/educationList";

interface Education {
  id: string;
  educationLevel: string;
  institute: string;
  category: string;
  startDate: string;
  endDate?: string;
}

export default function EducationSection() {
  const educationData: Education[] = [
    {
      id: "1",
      educationLevel: "S1",
      institute: "Telkom University",
      category: "Informatics Engineering",
      startDate: "April 2021",
    },
    {
      id: "2",
      educationLevel: "S1",
      institute: "Telkom University",
      category: "Medical Engineering",
      startDate: "April 2021",
    },
  ];
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
      <EducationList educationData={educationData} />
      <ModalEducation
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
