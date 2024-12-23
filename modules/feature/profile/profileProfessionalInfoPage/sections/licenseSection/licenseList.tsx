import { Image, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/licenseSection/profileLicense.styles";
import LicenseCard from "@components/molecules/card/LicenseCard";
import { Assets } from "@constants/Assets";
import React from "react";

interface License {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface LicenseGroup {
  organization: string;
  licenses: License[];
}

interface LicenseListProps {
  licenseData: License[];
}

const groupLicenseByOrganization = (licenses: License[]): LicenseGroup[] => {
  const grouped: Record<string, License[]> = {};

  licenses.forEach((license) => {
    if (!grouped[license.organization]) {
      grouped[license.organization] = [];
    }
    grouped[license.organization].push(license);
  });

  return Object.keys(grouped).map((organization) => ({
    organization,
    licenses: grouped[organization],
  }));
};

export default function LicenseList({ licenseData }: Readonly<LicenseListProps>) {
  const groupedLicense = groupLicenseByOrganization(licenseData);
  return (
    <>
      {groupedLicense.map((group) => (
        <View key={group.organization} style={styles.licenseBox}>
          <View style={styles.mainLicenseContainer}>
            {group.licenses.map((license, index) => {
              return (
                <LicenseCard
                  key={license.id}
                  licenseData={license}
                  isLast={index === group.licenses.length - 1}
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
