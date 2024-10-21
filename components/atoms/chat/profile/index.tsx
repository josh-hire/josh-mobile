import { Image, ImageSourcePropType } from "react-native";
import styles from "@components/atoms/chat/profile/profileChat.styles";

interface BubbleChatProps {
  url: ImageSourcePropType;
  size: number;
}

export default function ProfileChat({ url, size }: Readonly<BubbleChatProps>) {
  return <Image source={url} style={styles(size).profileImage} />;
}
