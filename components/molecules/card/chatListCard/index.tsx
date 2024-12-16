import ProfilePhoto from "@components/atoms/chat/profile";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { ImageSourcePropType, TouchableOpacity, View } from "react-native";
import styles from "@components/molecules/card/chatListCard/chatListCard.styles";

interface ChatListCardProps {
  isLast: boolean;
  name: string;
  company: string;
  message: string;
  imageUrl: ImageSourcePropType;
  date: string;
  handler: () => void;
}

export default function ChatListCard({
  isLast,
  name,
  company,
  message,
  imageUrl,
  date,
  handler,
}: Readonly<ChatListCardProps>) {
  return (
    <TouchableOpacity style={styles(isLast).cardContainer} onPress={handler}>
      <View style={styles(isLast).rowContainer}>
        <ProfilePhoto size={64} url={imageUrl} />
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
      </View>
      <View>
        <HeadingText type="label" color="white" fontWeight="bold">
          {date}
        </HeadingText>
      </View>
    </TouchableOpacity>
  );
}
