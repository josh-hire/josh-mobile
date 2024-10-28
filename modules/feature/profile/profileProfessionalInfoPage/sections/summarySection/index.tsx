import { Colors } from "@constants/Colors";
import { TextArea } from "@components/atoms/input/TextArea";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/summarySection/summarySection.styles";
import ModalSummary from "@modules/feature/profile/profileProfessionalInfoPage/sections/summarySection/modalSummary";

export default function SummarySection() {
  const [summary, setSummary] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.summaryContainer}>
      <HeadingText type="h6" color={Colors.neutral.n00}>
        Add your summary to your profile, tell about yourself and introduce who
        you are!
      </HeadingText>
      <TextArea
        label="Summary"
        labelColor="white"
        borderColor="white"
        textColor="white"
        type="text"
        text={summary}
        onChangeText={setSummary}
        placeholder="Add your summary"
        isMultiline={true}
        multilineHeight={200}
        pressHandler={() => {
          setModalVisible(true);
        }}
      />
      <ModalSummary
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        summary={summary}
        setSummary={setSummary}
      />
    </View>
  );
}
