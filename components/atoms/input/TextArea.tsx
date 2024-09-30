import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  InputModeOptions,
  TouchableOpacity,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from "react-native";
import { HeadingText } from "../text/HeadingText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export type TextAreaProps = {
  text: string;
  onChangeText: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  placeholder: string;
  type: string;
  error?: string;
  label?: string;
};

export function TextArea({
  text,
  onChangeText,
  onSubmit,
  placeholder,
  type,
  error,
  label,
}: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          isFocused && styles.containerFocused,
          error ? styles.containerError : {},
        ]}
      >
        <HeadingText type="h4">{label}</HeadingText>
        <TextInput
          style={[
            styles.textInput,
            isFocused && styles.textInputFocused,
            error ? styles.textInputError : {},
          ]}
          onChangeText={onChangeText}
          value={text}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          secureTextEntry={type === "password" && !showPassword}
          inputMode={type === "password" ? "text" : (type as InputModeOptions)}
          placeholderTextColor="#999"
          onSubmitEditing={onSubmit}
        />

        {type === "password" && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.icon}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#999"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <HeadingText type="label" color={Colors.primary.p04}>
          {error}
        </HeadingText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  containerFocused: {
    elevation: 10,
  },
  containerError: {
    borderColor: Colors.primary.p04,
  },
  textInput: {
    minHeight: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#FFF",
    flex: 1,
  },
  textInputFocused: {
    borderWidth: 2,
  },
  textInputError: {
    borderColor: Colors.primary.p04,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 32,
  },
});
