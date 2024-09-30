import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import TextInputForm from "@/components/molecules/form/TextInputForm";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ErrorBox from "@/components/atoms/error/ErrorBox";
import { TextInputSuggestion } from "@/components/atoms/input/TextInputSuggestion";
import ScrollableDatePicker from "@/components/atoms/input/ScrollableDatePicker";
import CheckboxSingle from "@/components/atoms/input/CheckboxSingle";

interface FormData {
  jobPosition: string;
  company: string;
  startJob: Date;
  endJob: Date;
  isWork: boolean;
}

interface FormErrors {
  jobPosition?: string;
  company?: string;
  startJob?: string;
  endJob?: string;
}

export default function LastWorkForm() {
  const [formData, setFormData] = useState<FormData>({
    jobPosition: "",
    company: "",
    startJob: new Date(),
    endJob: new Date(),
    isWork: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [error, setError] = useState<string>("");

  const handleInputChange = (
    name: keyof FormData,
    value: string | Date | boolean
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid: boolean = true;
    let newErrors: FormErrors = {};

    if (formData.jobPosition.trim() === "") {
      newErrors.jobPosition = "*Please enter your job position";
      isValid = false;
    }
    if (formData.company.trim() === "") {
      newErrors.company = "*Please enter your company";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
    }
  };

  return (
    <View style={styles.loginForm}>
      {(errors.jobPosition != undefined || errors.company != undefined) && (
        <ErrorBox error="Please input your recent work" />
      )}
      <HeadingText type="h4">Job Position</HeadingText>
      <TextInputSuggestion
        type="text"
        text={formData.jobPosition}
        placeholder="Ex: Data Science"
        onChangeText={(value) => handleInputChange("jobPosition", value)}
        suggestions={["Data Entry", "Data Analyst", "Data Science"]}
        error={errors.jobPosition}
      />
      <TextInputForm
        label="Company"
        type="text"
        text={formData.company}
        placeholder="Ex: Telkom Indonesia"
        onChangeText={(value) => handleInputChange("company", value)}
        error={errors.company}
      ></TextInputForm>
      <ScrollableDatePicker
        title="Start Job"
        onDateChange={(date) => handleInputChange("startJob", date)}
        initialDate={new Date()}
      />
      {!formData.isWork ? (
        <ScrollableDatePicker
          title="End Job"
          onDateChange={(date) => handleInputChange("endJob", date)}
          initialDate={new Date()}
        />
      ) : (
        <View />
      )}
      <CheckboxSingle
        data={["I am currently working in this role"]}
        onSelectionChange={(value: boolean) =>
          handleInputChange("isWork", value)
        }
      />
      <PrimaryButton title="Confirm" handler={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  loginForm: {
    gap: 12,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
