import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import TextInputForm from "@/components/molecules/form/TextInputForm";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
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
    if (formData.password.length < 8) {
      newErrors.password = "*Password must be at least 8 characters";
      isValid = false;
    }
    if (formData.password.trim() === "") {
      newErrors.password = "*Please enter your password";
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
        label="Your email address"
        onChangeText={(value: string) => handleInputChange("email", value)}
        placeholder="Afgan@gmail.com"
        type="email"
        text={formData.email}
        error={errors.email}
      />
      <TextInputForm
        label="Your password"
        onChangeText={(value: string) => handleInputChange("password", value)}
        placeholder="************"
        type="password"
        text={formData.password}
        error={errors.password}
      />
      <View style={styles.forgotPasswordContainer}>
        <Link href="/(auth)/forgot-password">
          <HeadingText type="label" color="red">
            Forgot Password?
          </HeadingText>
        </Link>
      </View>
      <PrimaryButton
        title="Sign In"
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
