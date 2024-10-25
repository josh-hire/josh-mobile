import { Colors } from "@constants/Colors";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { View } from "react-native";
import styles from "@modules/feature/main/profileProfessionalInfoPage/sections/honorSection/profileHonor.styles";
import SecondaryButton from "@components/atoms/button/SecondaryButton";
import ModalHonor from "@modules/feature/main/profileProfessionalInfoPage/sections/honorSection/modalHonor";
import HonorList from "@modules/feature/main/profileProfessionalInfoPage/sections/honorSection/honorList";

interface Honor {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export default function HonorSection() {
  const honorData: Honor[] = [
    {
      id: "1",
      title: "1st Winner Gemastik 2024",
      organization: "Kementrian Pendidikan dan Kebudayaan",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable",
      date: "April 2021",
    },
    {
      id: "2",
      title: "2nd Winner Gemastik 2022",
      organization: "Kementrian Pendidikan dan Kebudayaan",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable",
      date: "April 2021",
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.honorContainer}>
      <HeadingText type="h6" color={Colors.neutral.n00}>
        Boost your profile by adding the appropriate honors and certifications.
      </HeadingText>
      <SecondaryButton
        title="Add Honor"
        handler={() => {
          setModalVisible(true);
        }}
        color="white"
        position="right"
      />
      <HonorList honorData={honorData} />
      <ModalHonor
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
