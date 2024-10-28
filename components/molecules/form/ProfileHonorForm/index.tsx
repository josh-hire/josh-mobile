import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { useState } from "react";
import { View } from "react-native";
import ErrorBox from "@components/atoms/error/ErrorBox";
import { required } from "@utils/validate";
import styles from "@components/molecules/form/ProfileHonorForm/profileHonorForm.styles";
import { TextArea } from "@components/atoms/input/TextArea";
import ScrollableDatePicker from "@components/atoms/input/ScrollableDatePicker";

interface FormData {
  title: string;
  organization: string;
  date: Date;
  description: string;
}

interface FormErrors {
  title?: string;
  organization?: string;
}

export default function ProfileHonorForm() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    organization: "",
    date: new Date(),
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

    if (!required(formData.title)) {
      newErrors.title = "*Please enter your awarde";
      isValid = false;
    }
    if (!required(formData.organization)) {
      newErrors.organization = "*Please enter your issuing organization";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    validateForm();
  };

  return (
    <View style={styles.honorForm}>
      {(errors.title != undefined || errors.organization != undefined) && (
        <ErrorBox error="Please input valid certificate" />
      )}
      <TextArea
        label="Title"
        labelColor="white"
        borderColor="white"
        textColor="white"
        type="text"
        isRequired={true}
        text={formData.title}
        placeholder="Ex: Data Science"
        onChangeText={(value) => handleInputChange("title", value)}
        error={errors.title}
      ></TextArea>
      <TextArea
        label="Issuer"
        labelColor="white"
        borderColor="white"
        textColor="white"
        type="text"
        isRequired={true}
        text={formData.organization}
        placeholder="Ex: Microsoft"
        onChangeText={(value) => handleInputChange("organization", value)}
        error={errors.organization}
      ></TextArea>
      <ScrollableDatePicker
        label="Date Awarde"
        labelColor="white"
        isRequired={true}
        color="white"
        onDateChange={(date) => handleInputChange("date", date)}
        initialDate={new Date()}
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
        placeholder="Write your description"
        isMultiline={true}
        multilineHeight={100}
      />
      <PrimaryButton title="Save" handler={handleSubmit} />
    </View>
  );
}
