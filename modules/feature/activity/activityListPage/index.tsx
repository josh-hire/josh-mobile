import { HeadingText } from "@components/atoms/text/HeadingText";
import ChatListCard from "@components/molecules/card/chatListCard";
import { Assets } from "@constants/Assets";
import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/activity/activityListPage/activityList.styles";
import { Search } from "@components/atoms/input/Search";
import { useState } from "react";
import { Colors } from "@constants/Colors";

export default function ActivityLIstPage() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SafeAreaView style={[globalStyles.screen, styles.screenBackground]}>
      <View style={styles.chatContainer}>
        <HeadingText color="white" type="h5" fontWeight="bold">
          My Activity
        </HeadingText>
        <Search
          onChangeText={setSearchValue}
          placeholder="Search"
          text={searchValue}
          onSubmit={() => {}}
          borderColor={Colors.neutral.n02}
          textColor="white"
        />
        <ChatListCard
          isLast={false}
          imageUrl={Assets.images.telkomselLogo}
          name="Data Scientist"
          company="Telkomsel"
          message="South Jakarta - Full Time - Hybrid"
          date="Nov 11"
          handler={() => {
            router.push("/(chat)/jobseeker/chat");
          }}
        />
        <ChatListCard
          isLast={false}
          imageUrl={Assets.images.telkomselLogo}
          name="Data Scientist"
          company="Telkomsel"
          message="South Jakarta - Full Time - Hybrid"
          date="Nov 11"
          handler={() => {
            router.push("/(chat)/jobseeker/chat");
          }}
        />
        <ChatListCard
          isLast={false}
          imageUrl={Assets.images.telkomselLogo}
          name="Data Scientist"
          company="Telkomsel"
          message="South Jakarta - Full Time - Hybrid"
          date="Nov 11"
          handler={() => {
            router.push("/(chat)/jobseeker/chat");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
