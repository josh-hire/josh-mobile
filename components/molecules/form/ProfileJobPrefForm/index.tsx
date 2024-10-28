import { HeadingText } from "@components/atoms/text/HeadingText";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import CheckboxList from "@components/atoms/input/Checkbox";
import Dropdown from "@components/atoms/input/Dropdown";
import { useState } from "react";
import { View } from "react-native";
import { Colors } from "@constants/Colors";
import styles from "@components/molecules/form/ProfileJobPrefForm/profileJobPrefForm.styles";

interface ProfileJobPrefFormProps {
  type: string;
}
interface FormData {
  jobCategory: string;
  jobTitle: string[];
  city: string;
  workplace: string;
}

interface FormErrors {
  jobCategory?: string;
  jobTitle?: string;
  city?: string;
  workplace?: string;
}

export default function ProfileJobPrefForm({
  type,
}: Readonly<ProfileJobPrefFormProps>) {
  const [formData, setFormData] = useState<FormData>({
    jobCategory: "",
    jobTitle: [],
    city: "",
    workplace: "",
  });
  const [errors] = useState<FormErrors>({});

  const handleInputChange = (
    name: keyof FormData,
    value: string | Date | boolean | string[]
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderedSection = () => {
    if (type === "job") {
      return (
        <>
          <Dropdown
            color="white"
            data={["IT", "Business", "Legal", "Finance"]}
            placeholder="Select your preference job"
            selectedValue={formData.jobCategory}
            onValueChange={(value) => handleInputChange("jobCategory", value)}
            error={errors.jobCategory}
          ></Dropdown>
          {formData.jobCategory !== "" ? (
            <View>
              <HeadingText type="h6" color={Colors.neutral.n00}>
                Choose what you are interested in
              </HeadingText>
              <CheckboxList
                color="white"
                data={[
                  "Data Scientist",
                  "Frontend",
                  "Backend",
                  "UI/UX Designer",
                  "Data Analyst",
                ]}
                onSelectionChange={(value: string[]) =>
                  handleInputChange("jobTitle", value)
                }
              />
            </View>
          ) : (
            <View />
          )}
        </>
      );
    } else if (type === "city") {
      return (
        <Dropdown
          color="white"
          data={["South Jakarta", "West Java", "Sulawesi", "North Sumatra"]}
          placeholder="Select city preferences"
          selectedValue={formData.city}
          onValueChange={(value) => handleInputChange("city", value)}
          error={errors.city}
        ></Dropdown>
      );
    } else if (type === "workplace") {
      return (
        <CheckboxList
          color="white"
          data={["Remote", "Hybrid", "Onsite"]}
          numColumns={2}
          onSelectionChange={(value: string[]) =>
            handleInputChange("workplace", value)
          }
        />
      );
    } else if (type === "worktype") {
      return (
        <CheckboxList
          color="white"
          numColumns={2}
          data={[
            "Full Time",
            "Part Time",
            "Internship",
            "Contract",
            "Freelance",
          ]}
          onSelectionChange={(value: string[]) =>
            handleInputChange("workplace", value)
          }
        />
      );
    }
  };

  return (
    <View style={styles.formContainer}>
      {renderedSection()}
      <PrimaryButton title="Save" handler={() => {}} />
    </View>
  );
}
