import { HeadingText } from "@components/atoms/text/HeadingText";
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import styles from "@components/molecules/card/activityCard/activityCard";
import { Ionicons } from "@expo/vector-icons";

interface ActivityCardProps {
  name: string;
  salary: string;
  location: string;
  imageUrl: ImageSourcePropType;
  handler: () => void;
}

export default function ActivityCard({
  name,
  salary,
  location,
  imageUrl,
  handler,
}: Readonly<ActivityCardProps>) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handler}>
      <ImageBackground
        source={imageUrl}
        resizeMode="cover"
        style={styles.contentContainer}
      >
        <HeadingText type="h5" color="white" fontWeight="bold">
          {name}
        </HeadingText>
        <HeadingText type="h6" color="white">
          {salary}
        </HeadingText>
        <HeadingText type="label" color="white">
          <Ionicons name="location-outline"/> {location}
        </HeadingText>
      </ImageBackground>
    </TouchableOpacity>
  );
}
