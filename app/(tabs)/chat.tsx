import { Stack } from "expo-router";
import ChatListPage from "@modules/feature/chat/chatListPage";

export default function ChatScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <ChatListPage />
    </>
  );
}
