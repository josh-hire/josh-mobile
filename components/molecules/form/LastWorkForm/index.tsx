import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { TextArea } from "@components/atoms/input/TextArea";
import { useState } from "react";
import { View } from "react-native";
import ErrorBox from "@components/atoms/error/ErrorBox";
import { TextAreaSuggestion } from "@components/atoms/input/TextAreaSuggestion";
import ScrollableDatePicker from "@components/atoms/input/ScrollableDatePicker";
import CheckboxSingle from "@components/atoms/input/CheckboxSingle";
import { required } from "@utils/validate";
import styles from "@components/molecules/form/LastWorkForm/lastWorkForm.styles";
import { router } from "expo-router";

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

    if (!required(formData.jobPosition)) {
      newErrors.jobPosition = "*Please enter your job position";
      isValid = false;
    }
    if (!required(formData.company)) {
      newErrors.company = "*Please enter your company";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push("/registration/education-background");
    }
  };

  return (
    <View style={styles.loginForm}>
      {(errors.jobPosition != undefined || errors.company != undefined) && (
        <ErrorBox error="Please input your recent work" />
      )}
      <HeadingText type="h4">Job Position</HeadingText>
      <TextAreaSuggestion
        type="text"
        text={formData.jobPosition}
        placeholder="Ex: Data Science"
        onChangeText={(value) => handleInputChange("jobPosition", value)}
        suggestions={["Data Entry", "Data Analyst", "Data Science"]}
        error={errors.jobPosition}
      />
      <TextArea
        label="Company"
        type="text"
        text={formData.company}
        placeholder="Ex: Telkom Indonesia"
        onChangeText={(value) => handleInputChange("company", value)}
        error={errors.company}
      ></TextArea>
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