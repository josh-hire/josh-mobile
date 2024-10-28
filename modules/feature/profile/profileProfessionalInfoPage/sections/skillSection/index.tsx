import { Colors } from "@constants/Colors";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { Image, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/skillSection/profileSkill.styles";
import SecondaryButton from "@components/atoms/button/SecondaryButton";
import ModalSkill from "@modules/feature/profile/profileProfessionalInfoPage/sections/skillSection/modalSkill";
import TagsCard from "@components/molecules/card/TagsCard";
import { Assets } from "@constants/Assets";

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
      <View style={styles.skillBoxContainer}>
        {skillData.map((skill) => (
          <View key={skill} style={styles.skillItem}>
            <TagsCard title={skill} onTap={() => {}} />
          </View>
        ))}
        <Image source={Assets.icons.edit_2} style={styles.editIcon}/>
      </View>

      <ModalSkill
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
