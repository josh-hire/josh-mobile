import { Image, ScrollView, View } from "react-native";
import styles from "@components/molecules/card/LicenseCard/licenseCard.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";

interface License {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface LicenseCardProps {
  licenseData: License;
  isLast: boolean;
}

export default function LicenseCard({ licenseData, isLast }: LicenseCardProps) {
  return (
    <View style={styles.container}>
      <HeadingText type="h4" fontWeight="bold" style={styles.position}>
        {licenseData.title}
      </HeadingText>
      <ScrollView horizontal={true}>
        <HeadingText type="label" style={styles.organization}>
          {licenseData.organization}
        </HeadingText>
        <HeadingText type="label" style={styles.dates}>
          {licenseData.startDate} - {licenseData.endDate ?? "present"}
        </HeadingText>
      </ScrollView>
      <HeadingText type="label" style={styles.description}>
        {licenseData.description} See More!
      </HeadingText>
      {isLast ? <View /> : <Image source={Assets.icons.dash} />}
    </View>
  );
}
