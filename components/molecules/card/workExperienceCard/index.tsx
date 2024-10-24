import { Image, ScrollView, View } from "react-native";
import styles from "@components/molecules/card/workExperienceCard/workExpCard.styles";
import { Assets } from "@/constants/Assets";
import { HeadingText } from "@/components/atoms/text/HeadingText";

interface WorkExperience {
  id: string;
  position: string;
  company: string;
  type: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface WorkExperienceCardProps {
  workExpData: WorkExperience;
  isLast: boolean;
}

export default function WorkExperienceCard({
  workExpData,
  isLast,
}: WorkExperienceCardProps) {
  return (
    <View style={styles.container}>
      <HeadingText type="h4" fontWeight="bold" style={styles.position}>
        {workExpData.position}
      </HeadingText>
      <HeadingText type="h6" style={styles.company}>
        {workExpData.company} — {workExpData.type}
      </HeadingText>
      <ScrollView horizontal={true}>
        <HeadingText type="label" style={styles.location}>
          {workExpData.location}
        </HeadingText>
        <HeadingText type="label" style={styles.dates}>
          {workExpData.startDate} - {workExpData.endDate ?? "present"}
        </HeadingText>
      </ScrollView>
      <HeadingText type="label" style={styles.description}>
        {workExpData.description} See More!
      </HeadingText>
      {isLast ? <View /> : <Image source={Assets.icons.dash} />}
    </View>
  );
}
