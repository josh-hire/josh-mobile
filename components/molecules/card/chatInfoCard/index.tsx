import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@components/molecules/card/chatInfoCard/chatInfoCard.styles";

interface ChatInfoCardProps {
  text: string;
}

export default function ChatInfoCard({ text }: ChatInfoCardProps) {
  return (
    <View style={styles.infoContainer}>
      <HeadingText type="label">{text}</HeadingText>
    </View>
  );
}
