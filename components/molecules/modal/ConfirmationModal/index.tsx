import { Dispatch, SetStateAction } from "react";
import { Modal, View } from "react-native";
import styles from "./confirmationModal.styles";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { Colors } from "@constants/Colors";

interface ConfirmationModalProps {
  isConfirmVisible: boolean;
  setIsConfirmVisible: Dispatch<SetStateAction<boolean>>;
  handleCloseModal: () => void;
  title: string;
  description: string;
}

export default function ConfirmationModal({
  isConfirmVisible,
  setIsConfirmVisible,
  handleCloseModal,
  title,
  description,
}: Readonly<ConfirmationModalProps>) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isConfirmVisible}
      onRequestClose={() => setIsConfirmVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.confirmContainer}>
          <HeadingText type="h4" fontWeight="bold" color="black" style={styles.confirmText}>
            {title}
          </HeadingText>
          <HeadingText type="h6" textAlign="center" color="black" style={styles.confirmText}>
            {description}
          </HeadingText>
          <View style={styles.confirmButtons}>
            <PrimaryButton
              title="Confirm"
              handler={() => handleCloseModal()}
            />
            <PrimaryButton
              title="Cancel"
              color={Colors.secondary.s07}
              handler={() => setIsConfirmVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
