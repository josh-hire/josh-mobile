import { Alert, Image, Modal, TouchableOpacity, View } from "react-native";
import styles from "@components/molecules/modal/MatchModal/matchModal.styles";
import { Dispatch, SetStateAction } from "react";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import BubbleChat from "@components/atoms/chat/bubble";
import ProfileChat from "@components/atoms/chat/profile";

interface MatchModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export default function MatchModal({
  isVisible,
  setIsVisible,
}: Readonly<MatchModalProps>) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setIsVisible(!isVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.closedContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsVisible(!isVisible)}
          >
            <Image source={Assets.icons.no} style={styles.closeIcon}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <HeadingText color="white" type="h1" fontWeight="bold">
            You Matched!
          </HeadingText>
          <View style={styles.photoContainer}>
            <Image
              source={Assets.images.telkomselLogo}
              style={styles.photoProfile}
            />
            <Image
              source={Assets.images.telkomselLogo}
              style={styles.photoProfile}
            />
          </View>
          <View style={styles.chatContainer}>
            <ProfileChat url={Assets.logos.logo} />
            <View style={styles.bubbleContainer}>
              <BubbleChat message="Congratulations!" />
              <BubbleChat message="You meet the criteria and have been connected with Telkomsel!" />
              <BubbleChat message="For further information, please contact Telkomsel!" />
            </View>
          </View>
          <View style={styles.gotoButton}>
            <PrimaryButton handler={() => {}} title="Go to Chat" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
