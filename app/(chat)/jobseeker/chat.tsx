import { Stack } from "expo-router";
import ChatPage from "@modules/feature/chat/chatPage";
import React from "react";

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
