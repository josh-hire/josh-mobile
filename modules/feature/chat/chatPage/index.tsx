import styles from "@modules/feature/chat/chatPage/chat.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatHeader from "@modules/feature/chat/chatPage/chatHeader";
import { ScrollView, View } from "react-native";
import ChatInfoCard from "@components/molecules/card/chatInfoCard";
import ChatDateCard from "@components/molecules/card/chatDateCard";

export default function ChatPage() {
  return (
    <SafeAreaView style={[styles.screenBackground]}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View>
          <ChatHeader />
          <ChatDateCard text="Today" />
        </View>
        <View style={styles.chatContainer}>
          <ChatInfoCard text="You're matched with Telkomsel. You can only send one message. Please wait for a reply from Telkomsel before sending another message" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
