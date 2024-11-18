import { View } from "react-native";
import styles from "@components/molecules/card/chatDateCard/chatDateCard.styles";
import { HeadingText } from "@components/atoms/text/HeadingText";

interface ChatDateCardProps {
  text: string;
}

export default function ChatDateCard({ text }: Readonly<ChatDateCardProps>) {
  return (
    <View style={styles.dateContainer}>
      <HeadingText type="label">{text}</HeadingText>
    </View>
  );
}
