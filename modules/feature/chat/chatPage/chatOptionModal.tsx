import { HeadingText } from "@components/atoms/text/HeadingText";
import { Modal, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/chat/chatPage/chat.styles";
import { Dispatch, SetStateAction } from "react";
import { Ionicons } from "@expo/vector-icons";

interface ChatOptionModalProps {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  setIsConfirmVisible: Dispatch<SetStateAction<boolean>>;
  setModalOption: Dispatch<SetStateAction<number>>;
}

export default function ChatOptionModal({
  isModalVisible,
  setIsModalVisible,
  setIsConfirmVisible,
  setModalOption,
}: Readonly<ChatOptionModalProps>) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(true)}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setIsModalVisible(false)}
        style={styles.modalOverlay}
      >
        <TouchableOpacity activeOpacity={1} style={styles.modalView}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setIsModalVisible(false)}
          />
          <View>
            <TouchableOpacity
              style={styles.modalElement}
              onPress={() => {
                setModalOption(0);
                setIsConfirmVisible(true);
              }}
            >
              <Ionicons name="notifications-outline" size={28} />
              <HeadingText type="h6" color={"black"}>
                Mute
              </HeadingText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalElement}
              onPress={() => {
                setModalOption(1);
                setIsConfirmVisible(true);
              }}
            >
              <Ionicons name="flag-outline" size={28} />
              <HeadingText type="h6" color={"black"}>
                Report/Block
              </HeadingText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalElement}
              onPress={() => {
                setModalOption(2);
                setIsConfirmVisible(true);
              }}
            >
              <Ionicons name="trash-outline" size={28} />
              <HeadingText type="h6" color={"black"}>
                Delete Conversation
              </HeadingText>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}
