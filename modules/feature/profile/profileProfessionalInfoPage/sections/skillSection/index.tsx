import { Colors } from "@constants/Colors";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/skillSection/profileSkill.styles";
import SecondaryButton from "@components/atoms/button/SecondaryButton";
import ModalSkill from "@modules/feature/profile/profileProfessionalInfoPage/sections/skillSection/modalSkill";
import SkillList from "./skillList";

export default function SkillSection() {
  const skillData: string[] = ["Communication", "Team Work", "Responsible"];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.skillContainer}>
      <HeadingText type="h6" color={Colors.neutral.n00}>
        Boost your profile by showcasing key skills relevant to your field
      </HeadingText>
      <SecondaryButton
        title="Add Skill"
        handler={() => {
          setModalVisible(true);
        }}
        color="white"
        position="right"
      />
      <SkillList skillData={skillData} />

      <ModalSkill
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
