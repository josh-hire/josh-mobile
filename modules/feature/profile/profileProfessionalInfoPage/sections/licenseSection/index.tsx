import { Colors } from "@constants/Colors";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/licenseSection/profileLicense.styles";
import SecondaryButton from "@components/atoms/button/SecondaryButton";
import ModalLicence from "@modules/feature/profile/profileProfessionalInfoPage/sections/licenseSection/modalLicense";
import LicenseList from "@modules/feature/profile/profileProfessionalInfoPage/sections/licenseSection/licenseList";

interface License {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export default function LicenseSection() {
  const licenseData: License[] = [
    {
      id: "1",
      title: "Python for Data Scientist",
      organization: "Udemy",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable",
      startDate: "April 2021",
      endDate: "April 2022",
    },
    {
      id: "1",
      title: "Python for Data Scientist",
      organization: "Microsoft",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable",
      startDate: "April 2021",
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.licenseContainer}>
      <HeadingText type="h6" color={Colors.neutral.n00}>
        Boost your profile by adding the appropriate licenses and certifications.
      </HeadingText>
      <SecondaryButton
        title="Add License"
        handler={() => {
          setModalVisible(true);
        }}
        color="white"
        position="right"
      />
      <LicenseList licenseData={licenseData} />
      <ModalLicence
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
