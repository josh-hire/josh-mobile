import SecondaryButton from "@components/atoms/button/SecondaryButton";
import { ScrollView, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/workExpSection/workExpSection.styles";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Colors } from "@constants/Colors";
import ModalWorkExp from "@modules/feature/profile/profileProfessionalInfoPage/sections/workExpSection/modalWorkExp";
import { useState } from "react";
import WorkExperienceList from "./workExpList";

interface WorkExpData {
  id: string;
  position: string;
  company: string;
  type: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export default function WorkExperienceSection() {
  const jobData: WorkExpData[] = [
    {
      id: "1",
      position: "Data Science",
      company: "Telkomsel",
      type: "Full Time",
      location: "south Jakarta",
      startDate: "April 2021",
      endDate: "present",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable insights.",
    },
    {
      id: "2",
      position: "Data Science",
      company: "Telkomsel",
      type: "Internship",
      location: "Bandung, West Java",
      startDate: "October 2020",
      endDate: "April 2021",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable insights.",
    },
    {
      id: "3",
      position: "Data Master",
      company: "Astra International TBK",
      type: "Full Time",
      location: "south Jakarta",
      startDate: "April 2021",
      endDate: "present",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable insights.",
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.workExpContainer}>
      <View style={styles.addExperienceContainer}>
        <HeadingText type="h6" color={Colors.neutral.n00}>
          To enhance your profile, make sure to include detailed information
          about your work experience.
        </HeadingText>
        <SecondaryButton
          title="Add Work Experience"
          handler={() => {
            setModalVisible(true);
          }}
          color="white"
          position="right"
        />
      </View>
      <WorkExperienceList workExpData={jobData} />
      <ModalWorkExp
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </ScrollView>
  );
}
