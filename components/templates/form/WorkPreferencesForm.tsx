import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import ErrorBox from "@/components/atoms/error/ErrorBox";
import CheckboxList from "@/components/atoms/input/Checkbox";
import CheckboxSingle from "@/components/atoms/input/CheckboxSingle";
import Dropdown from "@/components/atoms/input/Dropdown";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

interface FormData {
  city: string;
  isRemote: boolean;
  worktype: string[];
}

interface FormErrors {
  city?: string;
  worktype?: string;
}

export default function WorkPreferencesForm() {
  const [formData, setFormData] = useState<FormData>({
    city: "",
    isRemote: false,
    worktype: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const options: string[] = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleInputChange = (
    name: keyof FormData,
    value: string | string[] | boolean
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    let newErrors: FormErrors = { city: "", worktype: "" };

    if (formData.city.trim() === "") {
      newErrors.city = "*Please select your city";
      isValid = false;
    } else {
      newErrors.city = undefined;
    }
    if (formData.worktype.length === 0) {
      newErrors.worktype = "*Please select your preferences";
      isValid = false;
    } else {
      newErrors.worktype = undefined;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
        router.push("/(auth)/registration/skill-possesed")
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {(errors.city != undefined ||
          errors.worktype != undefined) && (
          <ErrorBox error="Please select your work preferences" />
        )}
        <HeadingText type="h4" fontWeight="bold" style={styles.label}>
          City preference
        </HeadingText>
        <Dropdown
          data={options}
          placeholder="Your city"
          selectedValue={formData.city}
          onValueChange={(value: string) => handleInputChange("city", value)}
          error={errors.city}
        ></Dropdown>
        <HeadingText type="h4" fontWeight="bold" style={styles.label}>
          Workplace models
        </HeadingText>
        <CheckboxSingle
          data={["I want to work remotely"]}
          onSelectionChange={(value: boolean) =>
            handleInputChange("isRemote", value)
          }
        />
        <HeadingText type="h4" fontWeight="bold" style={styles.label}>
          Work type
        </HeadingText>
        {errors.worktype != null && (
          <HeadingText type="h6" color={Colors.primary.p04}>
            Choose what you are interested in
          </HeadingText>
        )}
        <CheckboxList
          data={["Full Time", "Internship", "Part Time", "Contract"]}
          numColumns={2}
          onSelectionChange={(value: string[]) =>
            handleInputChange("worktype", value)
          }
          error={errors.worktype}
        />
      </View>
      <PrimaryButton title="Submit" handler={handleSubmit}></PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
  label: {
    marginVertical: 12,
  },
});
