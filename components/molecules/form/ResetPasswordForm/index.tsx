import { passwordMatch, required } from "@utils/validate";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { TextArea } from "@components/atoms/input/TextArea";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import styles from "@components/molecules/form/ResetPasswordForm/resetPasswordForm.styles";

interface FormData {
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  password?: string;
  confirmPassword?: string;
}

export default function ForgotPAsswordForm() {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
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

    if (!required(formData.password)) {
      newErrors.password = "*Must be at least 8 characters";
      isValid = false;
    }
    if (!passwordMatch(formData.password, formData.confirmPassword)) {
      newErrors.confirmPassword = "*Both passwords must match";
      isValid = false;
    }
    if (!required(formData.confirmPassword)) {
      newErrors.confirmPassword = "*Must be at least 8 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      router.push("/(auth)/success-forgot-password");
      console.log("Form Data:", formData);
    }
  };

  return (
    <View style={styles.resetPasswordForm}>
      <View style={styles.fieldContainer}>
        <TextArea
          label="Password"
          onChangeText={(value: string) => handleInputChange("password", value)}
          placeholder="********"
          type="password"
          text={formData.password}
          error={errors.password}
        />
        <TextArea
          label="Confirm Password"
          onChangeText={(value: string) =>
            handleInputChange("confirmPassword", value)
          }
          placeholder="********"
          type="password"
          text={formData.confirmPassword}
          error={errors.confirmPassword}
        />
      </View>
      <PrimaryButton title="Reset Password" handler={handleSubmit} />
    </View>
  );
}
