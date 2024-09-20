import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import TextInputForm from "@/components/molecules/form/TextInputForm";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

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
    if (formData.email.trim() === "") {
      newErrors.email = "*Please enter your email to continue";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push("/(tabs)/home");
      console.log("Form Data:", formData);
    }
  };

  return (
    <View style={styles.loginForm}>
      <TextInputForm
        label="Email"
        onChangeText={(value: string) => handleInputChange("email", value)}
        placeholder="example@gmail.com"
        type="email"
        text={formData.email}
        error={errors.email}
      />
      <PrimaryButton
        title="Reset Password"
        link="/(tabs)/home"
        handler={handleSubmit}
      />
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
