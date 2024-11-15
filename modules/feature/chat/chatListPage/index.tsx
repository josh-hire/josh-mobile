import { HeadingText } from "@components/atoms/text/HeadingText";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/chat/chatListPage/chatList.styles";
import ChatListCard from "@/components/molecules/card/chatListCard";
import { View } from "react-native";
import { Assets } from "@constants/Assets";
import { router } from "expo-router";

export default function ChatListPage() {
  return (
    <SafeAreaView style={[globalStyles.screen, styles.screenBackground]}>
      <View style={styles.chatContainer}>
        <HeadingText color="white" type="h5" fontWeight="bold">
          Chats
        </HeadingText>
        <ChatListCard
          isLast={false}
          imageUrl={Assets.images.telkomselLogo}
          name="Mohammad Dafa"
          company="Telkomsel"
          message="You're matches, you can communicate"
          date="Nov 11"
          handler={() => {
            router.push("/(chat)/jobseeker/chat");
          }}
        />
        <ChatListCard
          isLast={false}
          imageUrl={Assets.images.telkomselLogo}
          name="Dafa Mohammad"
          company="Telkom"
          message="You're matches, you can communicate"
          date="Nov 8"
          handler={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}
