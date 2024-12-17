import { Image, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/honorSection/profileHonor.styles";
import HonorCard from "@components/molecules/card/honorCard";
import { Assets } from "@constants/Assets";
import React from "react";

interface Honor {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

interface HonorGroup {
  organization: string;
  honors: Honor[];
}

interface HonorListProps {
  honorData: Honor[];
}

const groupHonorByOrganization = (honors: Honor[]): HonorGroup[] => {
  const grouped: Record<string, Honor[]> = {};

  honors.forEach((honor) => {
    if (!grouped[honor.organization]) {
      grouped[honor.organization] = [];
    }
    grouped[honor.organization].push(honor);
  });

  return Object.keys(grouped).map((organization) => ({
    organization,
    honors: grouped[organization],
  }));
};

export default function HonorList({ honorData }: Readonly<HonorListProps>) {
  const groupedHonor = groupHonorByOrganization(honorData);
  return (
    <>
      {groupedHonor.map((group) => (
        <View key={group.organization} style={styles.honorBox}>
          <View style={styles.mainHonorContainer}>
            {group.honors.map((honor, index) => {
              return (
                <HonorCard
                  key={honor.id}
                  honorData={honor}
                  isLast={index === group.honors.length - 1}
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
