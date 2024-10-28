import { Image, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/skillSection/profileSkill.styles";
import TagsCard from "@components/molecules/card/TagsCard";
import { Assets } from "@constants/Assets";

interface SkillListProps {
  skillData: string[];
}

export default function SkillList({ skillData }: Readonly<SkillListProps>) {
  return (
    <View style={styles.skillBoxContainer}>
      {skillData.map((skill) => (
        <View key={skill} style={styles.skillItem}>
          <TagsCard title={skill} onTap={() => {}} />
        </View>
      ))}
      <Image source={Assets.icons.edit_2} style={styles.editIcon} />
    </View>
  );
}
