import ProfilePhoto from "@components/atoms/chat/profile";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import { ImageSourcePropType, TouchableOpacity, View } from "react-native";
import styles from "@components/molecules/card/chatListCard/chatListCard.styles";

interface ChatListCardProps {
  isLast: boolean;
  name: string;
  company: string;
  message: string;
  imageUrl: ImageSourcePropType;
  date: string;
}

export default function ChatListCard({
  isLast,
  name,
  company,
  message,
  imageUrl,
  date,
}: ChatListCardProps) {
  return (
    <TouchableOpacity style={styles(isLast).cardContainer}>
      <View>
        <ProfilePhoto size={64} url={imageUrl} />
      </View>
      <View>
        <HeadingText type="h5" color="white" fontWeight="bold">
          {name}
        </HeadingText>
        <HeadingText type="h6" color="white">
          {company}
        </HeadingText>
        <HeadingText type="label" color="white">
          {message}
        </HeadingText>
      </View>
      <View>
        <HeadingText type="label" color="white" fontWeight="bold">
          {date}
        </HeadingText>
      </View>
    </TouchableOpacity>
  );
}
