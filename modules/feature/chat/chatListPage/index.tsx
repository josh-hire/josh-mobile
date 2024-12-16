import { HeadingText } from "@components/atoms/text/HeadingText";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/chat/chatListPage/chatList.styles";
import ChatListCard from "@/components/molecules/card/chatListCard";
import { ScrollView, View } from "react-native";
import { Assets } from "@constants/Assets";
import { router } from "expo-router";
import { Search } from "@components/atoms/input/Search";
import { useState } from "react";
import { Colors } from "@constants/Colors";

export default function ChatListPage() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SafeAreaView style={[globalStyles.screen, styles.screenBackground]}>
      <View style={styles.chatContainer}>
        <HeadingText color="white" type="h5" fontWeight="bold">
          Chats
        </HeadingText>
        <Search
          onChangeText={setSearchValue}
          placeholder="Search"
          text={searchValue}
          onSubmit={() => {}}
          borderColor={Colors.neutral.n02}
          textColor="white"
        />
        <ScrollView style={styles.chatContainer}>
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
          <ChatListCard
            isLast={false}
            imageUrl={Assets.images.telkomselLogo}
            name="Dafa Mohammad"
            company="Telkom"
            message="You're matches, you can communicate"
            date="Nov 8"
            handler={() => {}}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
