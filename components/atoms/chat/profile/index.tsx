import { Image, ImageSourcePropType } from "react-native";
import styles from "@components/atoms/chat/profile/profileChat.styles";

interface BubbleChatProps {
  url: ImageSourcePropType;
}

export default function ProfileChat({ url }: Readonly<BubbleChatProps>) {
  return <Image source={url} style={styles.profileImage} />;
}
