import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { TextArea } from "@components/atoms/input/TextArea";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import ErrorBox from "@components/atoms/error/ErrorBox";
import { charOnly, numberOnly, required, validateEmail } from "@utils/validate";
import styles from "@components/molecules/form/PersonalInfoForm/personalInfo.styles";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [error] = useState<string>("");
  const router = useRouter();

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid: boolean = true;
    let newErrors: FormErrors = {};

    if (!charOnly(formData.name)) {
      newErrors.name = "*Please enter your valid name";
      isValid = false;
    }
    if (!required(formData.name)) {
      newErrors.name = "*Please enter your name";
      isValid = false;
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "*Please used a valid email address";
      isValid = false;
    }
    if (!required(formData.email)) {
      newErrors.email = "*Please enter your email to continue";
      isValid = false;
    }
    if (required(formData.phone) && !numberOnly(formData.phone)) {
      newErrors.phone = "*Please enter valid phone number";
      isValid = false;
    }
    if (!required(formData.address)) {
      newErrors.address = "*Please enter your address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.back();
    }
  };

  return (
    <View style={styles.form}>
      {error !== "" ? <ErrorBox error={error} /> : <View />}
      <TextArea
        label="Name"
        labelColor="white"
        labelSize="h5"
        borderColor="white"
        textColor="white"
        isRequired={true}
        onChangeText={(value: string) => handleInputChange("name", value)}
        placeholder="Afgansyah Putra"
        type="text"
        text={formData.name}
        error={errors.name}
      />
      <TextArea
        label="Email"
        labelColor="white"
        labelSize="h5"
        borderColor="white"
        textColor="white"
        isRequired={true}
        onChangeText={(value: string) => handleInputChange("email", value)}
        placeholder="Afgan@gmail.com"
        type="email"
        text={formData.email}
        error={errors.email}
      />
      <TextArea
        label="Phone number"
        labelColor="white"
        labelSize="h5"
        borderColor="white"
        textColor="white"
        onChangeText={(value: string) => handleInputChange("phone", value)}
        placeholder="+62"
        type="number"
        text={formData.phone}
        error={errors.phone}
      />
      <TextArea
        label="Address"
        labelColor="white"
        labelSize="h5"
        borderColor="white"
        textColor="white"
        isRequired={true}
        isMultiline={true}
        onChangeText={(value: string) => handleInputChange("address", value)}
        placeholder="Jl. Jalan"
        type="text"
        text={formData.address}
        error={errors.address}
      />
      <PrimaryButton title="Save" handler={handleSubmit} />
    </View>
  );
}
