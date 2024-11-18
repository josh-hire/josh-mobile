import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@components/molecules/card/chatMessageCard/chatMessage.styles";
import { Colors } from "@constants/Colors";

interface ChatMessageCardProps {
  text: string;
  isSender: boolean;
  status: "sent" | "seen";
  time: string;
}

export default function ChatMessageCard({
  text,
  isSender,
  status,
  time,
}: Readonly<ChatMessageCardProps>) {
  return (
    <View style={styles(isSender).chatContainer}>
      <HeadingText type="h6" color="white">
        {text}
      </HeadingText>
      <View style={styles(isSender).rowContainer}>
        <HeadingText type="label" color={Colors.neutral.n03}>
          {status}
        </HeadingText>
        <HeadingText type="label" color="white">
          {time}
        </HeadingText>
      </View>
    </View>
  );
}
