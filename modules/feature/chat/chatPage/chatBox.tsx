import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "@modules/feature/chat/chatPage/chat.styles";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@constants/Colors";

export default function ChatBox() {
  const [value, setValue] = useState<string>("");

  return (
    <View style={styles.chatBoxContainer}>
      <View style={styles.inputCBContainer}>
        <TextInput
          placeholder="Send Message"
          placeholderTextColor="#A9A9A9"
          style={styles.inputCB}
          value={value}
          onChangeText={setValue}
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
      <TouchableOpacity
        style={[
          styles.sendCBButton,
          { backgroundColor: value === "" ? "#EAEAEA" : Colors.secondary.s06 },
        ]}
      >
        <Ionicons
          name="send-outline"
          size={24}
          color={value === "" ? "#A9A9A9" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
}
