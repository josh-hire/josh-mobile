import {
  Alert,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "@components/molecules/modal/MatchModal/matchModal.styles";
import { Dispatch, SetStateAction } from "react";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import BubbleChat from "@components/atoms/chat/bubble";
import ProfilePhoto from "@components/atoms/chat/profile";
import SecondaryButton from "@components/atoms/button/SecondaryButton";
import { Colors } from "@constants/Colors";

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
        <ImageBackground source={Assets.images.bgMotif2} style={styles.background}>
          <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
              <HeadingText color="white" type="h1" fontWeight="bold">
                It's a match!
              </HeadingText>
              <View style={styles.infoContainer}>
                <HeadingText
                  color={Colors.secondary.s03}
                  type="h5"
                  fontWeight="bold"
                >
                  Personal Trainer
                </HeadingText>
                <HeadingText
                  color={Colors.neutral.n00}
                  type="h5"
                  fontWeight="bold"
                >
                  and
                </HeadingText>
                <HeadingText
                  color={Colors.secondary.s03}
                  type="h5"
                  fontWeight="bold"
                >
                  Clarissa Putri
                </HeadingText>
              </View>
            </View>
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
            <View style={styles.gotoButton}>
              <PrimaryButton handler={() => {}} title="Send Message" />
              <SecondaryButton
                handler={() => setIsVisible(!isVisible)}
                showIcon={false}
                title="Keep Swiping"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
}
