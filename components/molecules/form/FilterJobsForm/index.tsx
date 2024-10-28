import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { TextArea } from "@components/atoms/input/TextArea";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import styles from "@components/molecules/form/FilterJobsForm/filterJobs.styles";
import Filter from "@components/atoms/input/SelectOption";
import { HeadingText } from "@/components/atoms/text/HeadingText";

interface FormData {
  datePosted: string[];
  typeJob: string[];
  minSalary: string;
  maxSalary: string;
}

interface FormErrors {
  password?: string;
  confirmPassword?: string;
}

export default function FilterJobsForm() {
  const [formData, setFormData] = useState<FormData>({
    datePosted: [],
    typeJob: [],
    minSalary: "",
    maxSalary: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFilterChange = (
    filterType: keyof FormData,
    options: string[]
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [filterType]: options,
    }));
  };

  const validateForm = () => {
    let isValid: boolean = true;
    let newErrors: FormErrors = {};

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <View style={styles.filterJobsForm}>
      <Filter
        onSelect={(value: string[]) => handleFilterChange("datePosted", value)}
        title="Date Posted"
        options={["Any time", "Past 24 hour", "Past week", "Past month"]}
        selectMultiple={true}
      />
      <Filter
        onSelect={(value: string[]) => handleFilterChange("typeJob", value)}
        title="Type of job"
        options={[
          "Full time",
          "Part Time",
          "Contract",
          "Freelance",
          "Internship",
        ]}
        selectMultiple={true}
      />
      <View>
        <HeadingText type="h5" color="black" fontWeight="bold">
          Salary
        </HeadingText>
        <View style={styles.salaryContainer}>
          <View style={styles.salaryElement}>
            <TextArea
              label="Minimum"
              labelSize="h6"
              onChangeText={(value: string) =>
                handleInputChange("minSalary", value)
              }
              placeholder="Enter your salary"
              type="numeric"
              text={formData.minSalary}
            />
          </View>
          <View style={styles.salaryElement}>
            <TextArea
              label="Maximum"
              labelSize="h6"
              onChangeText={(value: string) =>
                handleInputChange("maxSalary", value)
              }
              placeholder="Enter your salary"
              type="numeric"
              text={formData.maxSalary}
            />
          </View>
        </View>
      </View>
      <View style={styles.saveButton}>
        <PrimaryButton
          handler={() => {
            handleSubmit();
          }}
          title="Save"
        />
      </View>
    </View>
  );
}
