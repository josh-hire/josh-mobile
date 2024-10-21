import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { TextArea } from "@components/atoms/input/TextArea";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../../../store/useAuthStore";
import { login } from "../../../../api/authApi";
import ErrorBox from "@components/atoms/error/ErrorBox";
import { Colors } from "@constants/Colors";
import { minimumEightChar, required, validateEmail } from "@utils/validate";
import styles from "@components/molecules/form/LoginForm/loginForm.styles";

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
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const { setToken } = useAuthStore();

  const mutation = useMutation({
    mutationFn: () => login(formData.email, formData.password),
    onSuccess: (data) => {
      setToken(data.token);
      router.replace("/(tabs)/home");
    },
    onError: (error) => {
      setError(error.message);
      console.error("Login failed:", error);
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

    if (!validateEmail(formData.email)) {
      newErrors.email = "*Please used a valid email address";
      isValid = false;
    }
    if (!required(formData.email)) {
      newErrors.email = "*Please enter your email to continue";
      isValid = false;
    }
    if (!minimumEightChar(formData.password)) {
      newErrors.password = "*Password must be at least 8 characters";
      isValid = false;
    }
    if (!required(formData.password)) {
      newErrors.password = "*Please enter your password";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      mutation.mutate();
    }
  };

  return (
    <View style={styles.loginForm}>
      {error !== "" ? <ErrorBox error={error} /> : <View />}
      <TextArea
        label="Your email address"
        onChangeText={(value: string) => handleInputChange("email", value)}
        placeholder="Afgan@gmail.com"
        type="email"
        text={formData.email}
        error={errors.email}
      />
      <TextArea
        label="Your password"
        onChangeText={(value: string) => handleInputChange("password", value)}
        placeholder="************"
        type="password"
        text={formData.password}
        error={errors.password}
      />
      <View style={styles.forgotPasswordContainer}>
        <Link href="/(auth)/verification">
          <HeadingText type="label" color="red">
            Forgot Password?
          </HeadingText>
        </Link>
      </View>
      {mutation.isPending ? (
        <ActivityIndicator size="large" color={Colors.primary.p04} />
      ) : (
        <PrimaryButton title="Sign In" handler={handleSubmit} />
      )}
    </View>
  );
}
