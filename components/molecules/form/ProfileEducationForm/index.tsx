import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { useState } from "react";
import { View } from "react-native";
import ErrorBox from "@components/atoms/error/ErrorBox";
import { TextAreaSuggestion } from "@components/atoms/input/TextAreaSuggestion";
import ScrollableDatePicker from "@components/atoms/input/ScrollableDatePicker";
import CheckboxSingle from "@components/atoms/input/CheckboxSingle";
import Dropdown from "@components/atoms/input/Dropdown";
import { required } from "@utils/validate";
import styles from "@components/molecules/form/ProfileEducationForm/profileEducationForm.styles";

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

export default function ProfileEducationForm() {
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
    <View style={styles.educationForm}>
      {(errors.levelEducation != undefined ||
        errors.institute != undefined ||
        errors.category) && (
        <ErrorBox error="Please input your education background" />
      )}
      <Dropdown
        label="Education Level"
        labelColor="white"
        labelSize="h4"
        color="white"
        isRequired={true}
        data={["SMA/SMK", "D3", "S1", "S2", "S3"]}
        placeholder="Ex: S1"
        selectedValue={formData.levelEducation}
        onValueChange={(value: string) =>
          handleInputChange("levelEducation", value)
        }
        error={errors.levelEducation}
      ></Dropdown>
      <TextAreaSuggestion
        label="Institute Education"
        labelColor="white"
        labelSize="h4"
        color="white"
        isRequired={true}
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
      <TextAreaSuggestion
        label="Category Education"
        labelColor="white"
        labelSize="h4"
        color="white"
        isRequired={true}
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
      <View style={styles.dateContainer}>
        <View style={!formData.isStudy ? styles.dateItem : { width: "100%" }}>
          <ScrollableDatePicker
            label="Start Job"
            labelColor="white"
            isRequired={true}
            color="white"
            onDateChange={(date) => handleInputChange("studyStart", date)}
            initialDate={new Date()}
          />
        </View>
        {!formData.isStudy ? (
          <View style={styles.dateItem}>
            <ScrollableDatePicker
              label="End Job"
              labelColor="white"
              color="white"
              onDateChange={(date) => handleInputChange("studyEnd", date)}
              initialDate={new Date()}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
      <CheckboxSingle
        data={["I am currently study"]}
        color="white"
        onSelectionChange={(value: boolean) =>
          handleInputChange("isStudy", value)
        }
      />
      <PrimaryButton title="Save" handler={handleSubmit} />
    </View>
  );
}
