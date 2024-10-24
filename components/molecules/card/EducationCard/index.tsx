import { Image, ScrollView, View } from "react-native";
import styles from "@components/molecules/card/EducationCard/educationCard.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";

interface Education {
  id: string;
  educationLevel: string;
  institute: string;
  category: string;
  startDate: string;
  endDate?: string;
}

interface EducationCardProps {
  educationData: Education;
  isLast: boolean;
}

export default function EducationCard({
  educationData,
  isLast,
}: EducationCardProps) {
  return (
    <View style={styles.container}>
      <HeadingText type="h4" fontWeight="bold" style={styles.position}>
        {educationData.institute}
      </HeadingText>
      <HeadingText type="h6" style={styles.company}>
        {educationData.category}
      </HeadingText>
      <ScrollView horizontal={true}>
        <HeadingText type="label" style={styles.location}>
          {educationData.educationLevel}
        </HeadingText>
        <HeadingText type="label" style={styles.dates}>
          {educationData.startDate} - {educationData.endDate ?? "present"}
        </HeadingText>
      </ScrollView>
      {isLast ? <View /> : <Image source={Assets.icons.dash} />}
    </View>
  );
}
