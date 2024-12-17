import {
  Animated,
  Image,
  ImageBackground,
  PanResponderInstance,
  View,
} from "react-native";
import styles from "@components/molecules/card/jobCard/jobCard.styles";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CardData {
  id: string;
  imageUrl: string;
  companyName: string;
  salary: string;
  location: string;
}

interface JobCardProps {
  index: number;
  currentIndex: number;
  cardStyle: any;
  card: CardData;
  panResponder: PanResponderInstance;
}

export default function JobCard({
  index,
  currentIndex,
  cardStyle,
  card,
  panResponder,
}: Readonly<JobCardProps>) {
  return (
    <Animated.View
      style={[styles.cardContainer, cardStyle]}
      {...(index === currentIndex ? panResponder.panHandlers : {})}
    >
      <ImageBackground
        source={{ uri: card.imageUrl }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Image
            style={styles.photoProfile}
            source={Assets.images.telkomselLogo}
          />
          <HeadingText style={styles.companyName}>
            {card.companyName}
          </HeadingText>
          <HeadingText style={styles.location}>{card.salary}</HeadingText>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={12} color="white" />
            <HeadingText style={styles.jobType} fontWeight="bold">
              {card.location}
            </HeadingText>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}
