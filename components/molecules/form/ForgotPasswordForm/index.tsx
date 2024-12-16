import { required } from "@utils/validate";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { TextArea } from "@components/atoms/input/TextArea";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import styles from "@components/molecules/form/ForgotPasswordForm/forgotPasswordForm.styles";

interface FormData {
  email: string;
}

interface FormErrors {
  email?: string;
}

export default function ForgotPAsswordForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid: boolean = true;
    let newErrors: FormErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "*Please used a valid email address";
      isValid = false;
    }
    if (!required(formData.email)) {
      newErrors.email = "*Please enter your email to continue";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push("/(auth)/verification");
      console.log("Form Data:", formData);
    }
  };

  return (
    <View style={styles.loginForm}>
      <TextArea
        label="Email"
        isRequired={true}
        onChangeText={(value: string) => handleInputChange("email", value)}
        placeholder="example@gmail.com"
        type="email"
        text={formData.email}
        error={errors.email}
      />
      <PrimaryButton title="Reset Password" handler={handleSubmit} />
    </View>
  );
}
