import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "@modules/feature/chat/chatPage/chat.styles";
import { Ionicons } from "@expo/vector-icons";

export default function ChatBox() {
  return (
    <View style={styles.chatBoxContainer}>
      <View style={styles.inputCBContainer}>
        <TextInput
          placeholder="Send Message"
          placeholderTextColor="#A9A9A9"
          style={styles.inputCB}
        />
        <TouchableOpacity>
          <Ionicons
            name="file-tray"
            size={24}
            color="#A9A9A9"
            style={styles.iconCB}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="camera"
            size={24}
            color="#A9A9A9"
            style={styles.iconCB}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.sendCBButton}>
        <Ionicons name="send-outline" size={24} color="#A9A9A9" />
      </TouchableOpacity>
    </View>
  );
}
