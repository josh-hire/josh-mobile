import {
  Animated,
  ImageBackground,
  PanResponderInstance,
  View,
} from "react-native";
import styles from "@components/molecules/card/jobCard/jobCard.styles";
import { HeadingText } from "@/components/atoms/text/HeadingText";

interface CardData {
  id: string;
  imageUrl: string;
  companyName: string;
  location: string;
  jobType: string;
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
        blurRadius={currentIndex === index ? 0 : 5}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.headerContainer}>
            <HeadingText style={styles.companyName}>
              {card.companyName}
            </HeadingText>
            <HeadingText style={styles.location}>{card.location}</HeadingText>
          </View>
          <HeadingText style={styles.jobType}>{card.jobType}</HeadingText>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}
