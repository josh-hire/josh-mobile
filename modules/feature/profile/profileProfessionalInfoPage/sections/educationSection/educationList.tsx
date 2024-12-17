import { Image, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/educationSection/educationSection.styles";
import ProfilePhoto from "@components/atoms/chat/profile";
import { Assets } from "@constants/Assets";
import EducationCard from "@components/molecules/card/EducationCard";
import React from "react";

interface Education {
  id: string;
  educationLevel: string;
  institute: string;
  category: string;
  startDate: string;
  endDate?: string;
}

interface EducationGroup {
  institute: string;
  educations: Education[];
}

interface EducationListProps {
  educationData: Education[];
}

const groupEducationByInstitution = (educations: Education[]): EducationGroup[] => {
  const grouped: Record<string, Education[]> = {};

  educations.forEach((education) => {
    if (!grouped[education.institute]) {
      grouped[education.institute] = [];
    }
    grouped[education.institute].push(education);
  });

  return Object.keys(grouped).map((institute) => ({
    institute,
    educations: grouped[institute],
  }));
};

export default function EducationList({
  educationData,
}: Readonly<EducationListProps>) {
  const groupedEducation = groupEducationByInstitution(educationData);
  return (
    <>
      {groupedEducation.map((group) => (
        <View key={group.institute} style={styles.educationBox}>
          <ProfilePhoto url={Assets.images.telkomselLogo} size={48} />
          <View style={styles.mainEducationContainer}>
            {group.educations.map((education, index) => {
              return (
                <EducationCard
                  key={education.id}
                  educationData={education}
                  isLast={index === group.educations.length - 1}
                />
              );
            })}
          </View>
          <Image source={Assets.icons.edit_2} />
        </View>
      ))}
    </>
  );
}
