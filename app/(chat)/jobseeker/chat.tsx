import { Stack } from "expo-router";
import ChatPage from "@modules/feature/chat/chatPage";

export default function ChatScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ChatPage />
    </>
  );
}
