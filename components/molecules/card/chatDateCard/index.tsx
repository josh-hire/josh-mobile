import { View } from "react-native";
import styles from "@components/molecules/card/chatDateCard/chatDateCard.styles";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Colors } from "@constants/Colors";

interface ChatDateCardProps {
  text: string;
}

export default function ChatDateCard({ text }: Readonly<ChatDateCardProps>) {
  return (
    <View style={styles.dateContainer}>
      <HeadingText type="label" color={Colors.neutral.n09}>
        {text}
      </HeadingText>
    </View>
  );
}
