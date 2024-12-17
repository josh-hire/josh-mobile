import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@components/molecules/card/chatInfoCard/chatInfoCard.styles";
import { Colors } from "@constants/Colors";

interface ChatInfoCardProps {
  text: string;
}

export default function ChatInfoCard({ text }: Readonly<ChatInfoCardProps>) {
  return (
    <View style={styles.infoContainer}>
      <HeadingText type="label" color={Colors.neutral.n09}>
        {text}
      </HeadingText>
    </View>
  );
}
