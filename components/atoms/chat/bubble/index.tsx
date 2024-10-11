import { View } from "react-native";
import { HeadingText } from "../../text/HeadingText";
import { Colors } from "@constants/Colors";
import styles from "@components/atoms/chat/bubble/bubbleChat.styles";

interface BubbleChatProps {
  message: string;
}

export default function BubbleChat({ message }: Readonly<BubbleChatProps>) {
  return (
    <View style={styles.bubbleContainer}>
      <HeadingText type="label" color={Colors.neutral.n08}>{message}</HeadingText>
    </View>
  );
}
