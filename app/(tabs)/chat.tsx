import { Stack } from "expo-router";
import ChatListPage from "@modules/feature/chat/chatListPage";
import React from "react";

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
