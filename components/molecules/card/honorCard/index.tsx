import { Image, ScrollView, View } from "react-native";
import styles from "@components/molecules/card/honorCard/honorCard.styles";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";

interface Honor {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

interface HonorCardProps {
  honorData: Honor;
  isLast: boolean;
}

export default function HonorCard({
  honorData,
  isLast,
}: Readonly<HonorCardProps>) {
  return (
    <View style={styles.container}>
      <HeadingText type="h4" fontWeight="bold" style={styles.position}>
        {honorData.title}
      </HeadingText>
      <ScrollView horizontal={true}>
        <HeadingText type="label" style={styles.organization}>
          {honorData.organization}
        </HeadingText>
        <HeadingText type="label" style={styles.dates}>
          {honorData.date}
        </HeadingText>
      </ScrollView>
      <HeadingText type="label" style={styles.description}>
        {honorData.description} See More!
      </HeadingText>
      {isLast ? <View /> : <Image source={Assets.icons.dash} />}
    </View>
  );
}
