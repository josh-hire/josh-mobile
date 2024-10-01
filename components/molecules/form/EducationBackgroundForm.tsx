import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ErrorBox from "@components/atoms/error/ErrorBox";
import { TextAreaSuggestion } from "@components/atoms/input/TextAreaSuggestion";
import ScrollableDatePicker from "@components/atoms/input/ScrollableDatePicker";
import CheckboxSingle from "@components/atoms/input/CheckboxSingle";
import Dropdown from "@components/atoms/input/Dropdown";
import { required } from "@utils/validate";

interface FormData {
  levelEducation: string;
  institute: string;
  category: string;
  studyStart: Date;
  studyEnd: Date;
  isStudy: boolean;
}

interface FormErrors {
  levelEducation?: string;
  institute?: string;
  category?: string;
}

export default function EducationBackgroundForm() {
  const [formData, setFormData] = useState<FormData>({
    levelEducation: "",
    institute: "",
    category: "",
    studyStart: new Date(),
    studyEnd: new Date(),
    isStudy: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

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

    if (!required(formData.levelEducation)) {
      newErrors.levelEducation = "*Please select your level of education";
      isValid = false;
    }
    if (!required(formData.institute)) {
      newErrors.institute = "*Please enter your institute";
      isValid = false;
    }
    if (!required(formData.category)) {
      newErrors.category = "*Please enter your education category";
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
      {(errors.levelEducation != undefined ||
        errors.institute != undefined ||
        errors.category) && (
        <ErrorBox error="Please input your education background" />
      )}
      <HeadingText type="h4">Level Education</HeadingText>
      <Dropdown
        data={["SMA/SMK", "D3", "S1", "S2", "S3"]}
        placeholder="Ex: S1"
        selectedValue={formData.levelEducation}
        onValueChange={(value: string) =>
          handleInputChange("levelEducation", value)
        }
        error={errors.levelEducation}
      ></Dropdown>
      <HeadingText type="h4">Institute Education</HeadingText>
      <TextAreaSuggestion
        type="text"
        text={formData.institute}
        placeholder="Ex: Institut Teknologi Bandung"
        onChangeText={(value) => handleInputChange("institute", value)}
        suggestions={[
          "Indonesia University",
          "Gadjah Mada University",
          "Airlangga University",
        ]}
        error={errors.institute}
      />
      <HeadingText type="h4">Category Education</HeadingText>
      <TextAreaSuggestion
        type="text"
        text={formData.category}
        placeholder="Ex: Informatics"
        onChangeText={(value) => handleInputChange("category", value)}
        suggestions={[
          "Informatics Engineering",
          "Informatics Engineering",
          "Informatics Engineering",
        ]}
        error={errors.category}
      />
      <ScrollableDatePicker
        title="Study Start"
        onDateChange={(date) => handleInputChange("studyStart", date)}
        initialDate={new Date()}
      />
      {!formData.isStudy ? (
        <ScrollableDatePicker
          title="Study End"
          onDateChange={(date) => handleInputChange("studyEnd", date)}
          initialDate={new Date()}
        />
      ) : (
        <View />
      )}
      <CheckboxSingle
        data={["I am currently working in this role"]}
        onSelectionChange={(value: boolean) =>
          handleInputChange("isStudy", value)
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
