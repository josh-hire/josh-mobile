import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { TextArea } from "@components/atoms/input/TextArea";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { register } from "../../../api/authApi";
import { Colors } from "@constants/Colors";
import ErrorBox from "@components/atoms/error/ErrorBox";
import { charOnly, numberOnly, required, validateEmail } from "@utils/validate";

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
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => register(formData.email, "12345678"),
    onSuccess: () => {
      router.push("/(auth)/login");
    },
    onError: (error) => {
      setError(error.message);
      console.error("Registration failed:", error);
    },
  });

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
      newErrors.name = "*Please enter valid name";
      isValid = false;
    }
    if (!required(formData.name)) {
      newErrors.name = "*Please enter your name";
      isValid = false;
    }
    if (!charOnly(formData.address)) {
      newErrors.address = "*Please enter valid address";
      isValid = false;
    }
    if (!required(formData.address)) {
      newErrors.address = "*Please enter your address";
      isValid = false;
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "*Please used a valid email address";
      isValid = false;
    }
    if (!required(formData.email)) {
      newErrors.email = "*Please enter your email";
      isValid = false;
    }
    if (!numberOnly(formData.phone)) {
      newErrors.phone = "*Please enter valid phone number";
      isValid = false;
    }
    if (!required(formData.phone)) {
      newErrors.phone = "*Please enter your phone";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    router.push("/registration/education-background");
  };

  return (
    <View style={styles.loginForm}>
      {error !== "" ? <ErrorBox error={error} /> : <View />}
      <TextArea
        label="Name"
        onChangeText={(value: string) => handleInputChange("name", value)}
        placeholder="Enter your name"
        type="text"
        text={formData.name}
        error={errors.name}
      />
      <TextArea
        label="Address"
        onChangeText={(value: string) => handleInputChange("address", value)}
        placeholder="Enter your address"
        type="text"
        text={formData.address}
        error={errors.address}
      />
      <TextArea
        label="Email"
        onChangeText={(value: string) => handleInputChange("email", value)}
        placeholder="Enter your email"
        type="email"
        text={formData.email}
        error={errors.email}
      />
      <TextArea
        label="Phone Number"
        onChangeText={(value: string) => handleInputChange("phone", value)}
        placeholder="Enter your phone number"
        type="numeric"
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
      {mutation.isPending ? (
        <ActivityIndicator size="large" color={Colors.primary.p04} />
      ) : (
        <PrimaryButton title="Sign Up" handler={handleSubmit} />
      )}
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
