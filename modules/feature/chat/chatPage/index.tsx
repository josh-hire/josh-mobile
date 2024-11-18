import styles from "@modules/feature/chat/chatPage/chat.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatHeader from "@modules/feature/chat/chatPage/chatHeader";
import { ScrollView, View } from "react-native";
import ChatInfoCard from "@components/molecules/card/chatInfoCard";
import ChatDateCard from "@components/molecules/card/chatDateCard";
import ChatMessageCard from "@components/molecules/card/chatMessageCard";
import ChatBox from "@modules/feature/chat/chatPage/chatBox";
import ConfirmationModal from "@components/molecules/modal/ConfirmationModal";
import { useState } from "react";
import { router } from "expo-router";
import ChatOptionModal from "@modules/feature/chat/chatPage/chatOptionModal";

interface ModalData {
  title: string;
  description: string;
}

export default function ChatPage() {
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalOption, setModalOption] = useState<number>(0);

  const modalData: ModalData[] = [
    {
      title: "Mute This Account?",
      description: "Are you sure want to mute this account?",
    },
    {
      title: "Block This Account?",
      description: "Are you sure want to block this account?",
    },
    {
      title: "Delete Conversation",
      description: "Are you sure want to delete this conversation?",
    },
  ];

  return (
    <SafeAreaView style={[styles.screenBackground]}>
      <ChatHeader optionHandler={() => setIsModalVisible(true)} />
      <ScrollView stickyHeaderIndices={[0]}>
        <ChatDateCard text="Today" />
        <View style={styles.chatContainer}>
          <ChatInfoCard text="You're matched with Telkomsel. You can only send one message. Please wait for a reply from Telkomsel before sending another message" />
          <ChatMessageCard
            isSender={false}
            text="You're matched with Telkomsel."
            status="seen"
            time="2.00pm"
          />
          <ChatMessageCard
            isSender={true}
            text="Hi."
            status="seen"
            time="2.01pm"
          />
          <ChatMessageCard
            isSender={true}
            text="Hello and congrats for your achievement!"
            status="sent"
            time="2.05pm"
          />
          <ChatMessageCard
            isSender={true}
            text="Hello and congrats for your achievement!"
            status="sent"
            time="2.05pm"
          />
          <ChatMessageCard
            isSender={true}
            text="Hello and congrats for your achievement!"
            status="sent"
            time="2.05pm"
          />
          <ChatMessageCard
            isSender={true}
            text="Hello and congrats for your achievement!"
            status="sent"
            time="2.05pm"
          />
          <ChatMessageCard
            isSender={true}
            text="Hello and congrats for your achievement!"
            status="sent"
            time="2.05pm"
          />
        </View>
      </ScrollView>
      <ChatBox />
      <ConfirmationModal
        title={modalData[modalOption].title}
        description={modalData[modalOption].description}
        handleCloseModal={() => router.back()}
        isConfirmVisible={isConfirmVisible}
        setIsConfirmVisible={setIsConfirmVisible}
      />
      <ChatOptionModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setIsConfirmVisible={setIsConfirmVisible}
        setModalOption={setModalOption}
      />
    </SafeAreaView>
  );
}
