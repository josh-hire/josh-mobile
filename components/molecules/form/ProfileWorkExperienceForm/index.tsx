import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { TextArea } from "@components/atoms/input/TextArea";
import { useState } from "react";
import { View } from "react-native";
import { TextAreaSuggestion } from "@components/atoms/input/TextAreaSuggestion";
import ScrollableDatePicker from "@components/atoms/input/ScrollableDatePicker";
import CheckboxSingle from "@components/atoms/input/CheckboxSingle";
import { required } from "@utils/validate";
import styles from "@components/molecules/form/ProfileWorkExperienceForm/profileWorkExpForm.styles";
import Dropdown from "@/components/atoms/input/Dropdown";

interface FormData {
  jobPosition: string;
  company: string;
  employment: string;
  location: string;
  startJob: Date;
  endJob: Date;
  isWork: boolean;
  description: string;
}

interface FormErrors {
  jobPosition?: string;
  company?: string;
  employment?: string;
  location?: string;
  startJob?: string;
  endJob?: string;
  description?: string;
}

export default function ProfileWorkExperienceForm() {
  const [formData, setFormData] = useState<FormData>({
    jobPosition: "",
    company: "",
    employment: "",
    location: "",
    startJob: new Date(),
    endJob: new Date(),
    isWork: false,
    description: "",
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
    validateForm();
  };

  return (
    <View style={styles.form}>
      <TextAreaSuggestion
        type="text"
        label="Job Position"
        labelColor="white"
        color="white"
        isRequired={true}
        text={formData.jobPosition}
        placeholder="Ex: Data Science"
        onChangeText={(value) => handleInputChange("jobPosition", value)}
        suggestions={["Data Entry", "Data Analyst", "Data Science"]}
        error={errors.jobPosition}
      />
      <TextArea
        label="Company"
        labelColor="white"
        borderColor="white"
        textColor="white"
        isRequired={true}
        type="text"
        text={formData.company}
        placeholder="Ex: Telkom Indonesia"
        onChangeText={(value) => handleInputChange("company", value)}
        error={errors.company}
      ></TextArea>
      <Dropdown
        label="Employment Type"
        labelColor="white"
        labelSize="h4"
        selectedValue={formData.employment}
        data={["Part Time", "Full Time", "Contract", "Internship"]}
        onValueChange={(value) => handleInputChange("employment", value)}
        color="white"
      ></Dropdown>
      <TextArea
        label="Location"
        labelColor="white"
        borderColor="white"
        textColor="white"
        type="text"
        text={formData.location}
        placeholder="Ex: Jakarta"
        onChangeText={(value) => handleInputChange("location", value)}
        error={errors.location}
      ></TextArea>
      <View style={styles.dateContainer}>
        <View style={!formData.isWork ? styles.dateItem : { width: "100%" }}>
          <ScrollableDatePicker
            label="Start Job"
            labelColor="white"
            isRequired={true}
            color="white"
            onDateChange={(date) => handleInputChange("startJob", date)}
            initialDate={new Date()}
          />
        </View>
        {!formData.isWork ? (
          <View style={styles.dateItem}>
            <ScrollableDatePicker
              label="End Job"
              labelColor="white"
              color="white"
              onDateChange={(date) => handleInputChange("endJob", date)}
              initialDate={new Date()}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
      <CheckboxSingle
      color="white"
        data={["I am currently working in this role"]}
        onSelectionChange={(value: boolean) =>
          handleInputChange("isWork", value)
        }
      />
      <TextArea
        label="Description"
        labelColor="white"
        borderColor="white"
        textColor="white"
        type="text"
        text={formData.description}
        onChangeText={(value: string) =>
          handleInputChange("description", value)
        }
        placeholder="Add your summary"
        isMultiline={true}
        multilineHeight={100}
      />
      <PrimaryButton title="Confirm" handler={handleSubmit} />
    </View>
  );
}
