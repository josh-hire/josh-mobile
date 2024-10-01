import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import ErrorBox from "@components/atoms/error/ErrorBox";
import SelectedTagsCard from "@components/molecules/card/SelectedTagsCard";
import TagsCard from "@components/molecules/card/TagsCard";
import { TextArea } from "@components/atoms/input/TextArea";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { elementsNotEmpty } from "@utils/validate";

interface FormErrors {
  skills?: string;
}

export default function SkillPossesedForm() {
  const [skill, setSkill] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([
    "Option 1",
    "Option Opppt",
    "Option Options",
    "Option 4",
    "Option 5",
    "Option ^",
  ]);

  const handleInputChange = (value: string) => {
    setSelectedSkills([...selectedSkills, value.trim()]);
    setSkill("");
  };

  const validateForm = (): boolean => {
    let isValid = true;
    let newErrors: FormErrors = { skills: "" };

    if (!elementsNotEmpty(selectedSkills)) {
      newErrors.skills = "Please add your skill";
      isValid = false;
    } else {
      newErrors.skills = undefined;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleDeleteSkills = (index: number) => {
    const newSkills = selectedSkills.filter((_, i) => i !== index);
    setSelectedSkills(newSkills);
  };

  const handleAddSkill = (value: string, index: number) => {
    if (value.trim() !== "") {
      setSelectedSkills([...selectedSkills, value.trim()]);
      const newSkills = options.filter((_, i) => i !== index);
      setOptions(newSkills);
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
    }
  };

  return (
    <View style={styles.container}>
      {errors.skills != undefined && <ErrorBox error={errors.skills} />}
      <View>
        <TextArea
          label="Skills"
          onChangeText={setSkill}
          onSubmit={() => handleInputChange(skill)}
          placeholder="Enter your skill"
          type="text"
          text={skill}
          error={errors.skills}
        />
      </View>
      <View style={styles.selectedContainer}>
        {selectedSkills.map((option, index) => (
          <SelectedTagsCard
            key={index}
            title={option}
            onTap={() => handleDeleteSkills(index)}
          />
        ))}
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.availableContainer}>
        {options.map((option, index) => (
          <View style={styles.column}>
            <TagsCard
              key={index}
              title={option}
              onTap={() => handleAddSkill(option, index)}
            />
          </View>
        ))}
      </View>
      <PrimaryButton title="Submit" handler={handleSubmit}></PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  label: {
    marginVertical: 12,
  },
  selectedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  availableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  column: {
    width: "50%",
    padding: 10,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
