import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import TextInputForm from "@/components/molecules/form/TextInputForm";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  address?: string;
  email?: string;
  phone?: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    email: "",
    phone: "",
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
    if (formData.name.trim() === "") {
      newErrors.name = "*Please enter your name";
      isValid = false;
    }
    if (formData.address.trim() === "") {
      newErrors.address = "*Please enter your address";
      isValid = false;
    }
    if (formData.email.trim() === "") {
      newErrors.email = "*Please enter your email";
      isValid = false;
    }
    if (formData.phone.trim() === "") {
      newErrors.phone = "*Please enter your password";
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
        label="Name"
        onChangeText={(value: string) => handleInputChange("name", value)}
        placeholder="Enter your name"
        type="text"
        text={formData.name}
        error={errors.name}
      />
      <TextInputForm
        label="Address"
        onChangeText={(value: string) => handleInputChange("address", value)}
        placeholder="Enter your address"
        type="text"
        text={formData.address}
        error={errors.address}
      />
      <TextInputForm
        label="Email"
        onChangeText={(value: string) => handleInputChange("email", value)}
        placeholder="Enter your email"
        type="email"
        text={formData.email}
        error={errors.email}
      />
      <TextInputForm
        label="Phone Number"
        onChangeText={(value: string) => handleInputChange("phone", value)}
        placeholder="Enter your phone number"
        type="number"
        text={formData.phone}
        error={errors.phone}
      />
      <View style={styles.forgotPasswordContainer}>
        <Link href="/(auth)/forgot-password">
          <HeadingText type="label" color="red">
            Forgot Password?
          </HeadingText>
        </Link>
      </View>
      <PrimaryButton
        title="Sign Up"
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
