import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { useState } from "react";
import { View } from "react-native";
import ErrorBox from "@components/atoms/error/ErrorBox";
import ScrollableDatePicker from "@components/atoms/input/ScrollableDatePicker";
import CheckboxSingle from "@components/atoms/input/CheckboxSingle";
import { required } from "@utils/validate";
import styles from "@components/molecules/form/ProfileLicenseForm/profileLicenseForm.styles";
import { TextArea } from "@components/atoms/input/TextArea";

interface FormData {
  title: string;
  organization: string;
  startDate: Date;
  endDate: Date;
  isNoExpired: boolean;
  description: string;
}

interface FormErrors {
  title?: string;
  organization?: string;
}

export default function ProfileLicenseForm() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    organization: "",
    startDate: new Date(),
    endDate: new Date(),
    isNoExpired: false,
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
      newErrors.title = "*Please enter your certificate title";
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
    if (validateForm()) {
    }
  };

  return (
    <View style={styles.educationForm}>
      {(errors.title != undefined || errors.organization != undefined) && (
        <ErrorBox error="Please input valid certificate" />
      )}
      <TextArea
        label="Certificate Title"
        labelColor="white"
        borderColor="white"
        textColor="white"
        type="text"
        text={formData.title}
        placeholder="Ex: Data Science"
        onChangeText={(value) => handleInputChange("title", value)}
        error={errors.title}
      ></TextArea>
      <TextArea
        label="Issuing Organization"
        labelColor="white"
        borderColor="white"
        textColor="white"
        type="text"
        text={formData.organization}
        placeholder="Ex: Microsoft"
        onChangeText={(value) => handleInputChange("organization", value)}
        error={errors.organization}
      ></TextArea>
      <View style={styles.dateContainer}>
        <View
          style={!formData.isNoExpired ? styles.dateItem : { width: "100%" }}
        >
          <ScrollableDatePicker
            label="Start"
            labelColor="white"
            isRequired={true}
            color="white"
            onDateChange={(date) => handleInputChange("startDate", date)}
            initialDate={new Date()}
          />
        </View>
        {!formData.isNoExpired ? (
          <View style={styles.dateItem}>
            <ScrollableDatePicker
              label="Finished"
              labelColor="white"
              color="white"
              onDateChange={(date) => handleInputChange("endDate", date)}
              initialDate={new Date()}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
      <CheckboxSingle
        data={["This certificate has no expiry date"]}
        color="white"
        onSelectionChange={(value: boolean) =>
          handleInputChange("isNoExpired", value)
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
        placeholder="Write your description"
        isMultiline={true}
        multilineHeight={100}
      />
      <PrimaryButton title="Save" handler={handleSubmit} />
    </View>
  );
}
