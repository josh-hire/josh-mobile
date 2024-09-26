import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import SecondaryButton from "@/components/atoms/button/SecondaryButton";
import CheckboxList from "@/components/atoms/input/Checkbox";
import Dropdown from "@/components/atoms/input/Dropdown";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

interface IDropdown {
  selectedOption: string | null;
  checkboxes: string[];
  selectedCheckboxes: string[];
}

interface FormErrors {
  dropdown?: string[];
  checkbox?: string[];
}

export default function ProfessionalInformationForm() {
  const [dropdowns, setDropdowns] = useState<IDropdown[]>([
    { selectedOption: null, checkboxes: [], selectedCheckboxes: [] },
  ]);
  const [errors, setErrors] = useState<FormErrors>({});
  const options: string[] = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const checkBoxesOptions: { [key: string]: string[] } = {
    "Option 1": ["Checkbox 1", "Checkbox 2", "Checkbox 3"],
    "Option 2": ["Checkbox 4", "Checkbox 5", "Checkbox 6"],
    "Option 3": ["Checkbox 7", "Checkbox 8", "Checkbox 9"],
  };

  const addDropdown = () => {
    setDropdowns([
      ...dropdowns,
      { selectedOption: null, checkboxes: [], selectedCheckboxes: [] },
    ]);
  };

  const handleSelect = (index: number, value: string) => {
    const newDrodpdowns = [...dropdowns];
    newDrodpdowns[index].selectedOption = value;
    newDrodpdowns[index].checkboxes = checkBoxesOptions[value] || [];
    newDrodpdowns[index].selectedCheckboxes = [];
    setDropdowns(newDrodpdowns);
  };

  const handleCheckboxChange = (index: number, selectedItems: string[]) => {
    const newDropdowns = [...dropdowns];
    newDropdowns[index].selectedCheckboxes = selectedItems;
    setDropdowns(newDropdowns);
    console.log(dropdowns)
  };

  const validateForm = (): boolean => {
    let isValid = true;
    let newErrors: FormErrors = { dropdown: [], checkbox: [] };

    dropdowns.forEach((dropdown, index) => {
      if (!dropdown.selectedOption) {
        newErrors.dropdown![index] =
          "*Please select an option from the dropdown";
        isValid = false;
      }
      if (
        dropdown.checkboxes.length > 0 &&
        dropdown.selectedCheckboxes.length === 0
      ) {
        newErrors.checkbox![index] = "You must select at least 1";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push('/(auth)/registration/work-preferences')
    }
  };

  return (
    <View style={styles.container}>
      {dropdowns.map((dropdown, index) => (
        <View key={index}>
          <Dropdown
            data={options}
            placeholder="Select Job Title"
            selectedValue={dropdown.selectedOption}
            onValueChange={(value) => handleSelect(index, value)}
            error={errors.dropdown?.[index] && errors.dropdown[index]}
          ></Dropdown>
          {dropdown.checkboxes.length > 0 && (
            <View key={index}>
              <HeadingText type="h6" color={errors.checkbox?.[index] && Colors.primary.p04} style={styles.checkboxLabel}>
                Choose what you are interested in
              </HeadingText>
              <CheckboxList
                data={dropdown.checkboxes}
                onSelectionChange={(selectedItems) =>
                  handleCheckboxChange(index, selectedItems)
                }
                error={errors.checkbox?.[index] && errors.checkbox[index]}
              />
              {errors.checkbox?.[index] && (
                <HeadingText type="h6" color={Colors.primary.p04}>
                  {errors.checkbox[index]}
                </HeadingText>
              )}
            </View>
          )}
        </View>
      ))}
      <SecondaryButton title="Add Job Title" handler={addDropdown} />
      <PrimaryButton title="Submit" handler={handleSubmit}></PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
  checkboxLabel: {
    marginVertical: 12,
  },
});
