import React, { useState } from "react";
import {
  TextInput,
  View,
  InputModeOptions,
  TouchableOpacity,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Colors } from "@constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import styles from "@components/atoms/input/TextArea/textArea.styles";

export type TextAreaProps = {
  text: string;
  onChangeText: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  placeholder: string;
  type: string;
  error?: string;
  label?: string;
  labelSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "paragraph";
  labelColor?: string;
  borderColor?: string;
  textColor?: string;
  isRequired?: boolean;
  isMultiline?: boolean;
  multilineHeight?: number;
  pressHandler?: () => void;
};

export function TextArea({
  text,
  onChangeText,
  onSubmit,
  placeholder,
  type,
  error,
  label,
  labelSize,
  labelColor,
  borderColor,
  textColor,
  isRequired,
  isMultiline,
  multilineHeight,
  pressHandler = () => {},
}: Readonly<TextAreaProps>) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View style={[styles.container, { height: isMultiline ? 120 : 50 }]}>
        <View>
          <View style={styles.textLabelContainer}>
            <HeadingText type={labelSize ?? "h4"} color={labelColor ?? "white"}>
              {label}
            </HeadingText>
            {isRequired === true ? (
              <HeadingText
                type={labelSize ?? "h4"}
                color={labelColor ?? "white"}
              >
                *
              </HeadingText>
            ) : (
              <View />
            )}
          </View>
          <View
            style={[
              isFocused
                ? {
                    ...styles.containerFocused,
                    height: isMultiline ? multilineHeight : 40,
                  }
                : {},
              error ? styles.containerError : {},
            ]}
          >
            <TextInput
              style={[
                styles.textInput,
                isFocused && styles.textInputFocused,
                {
                  borderColor: borderColor ?? "white",
                  color: textColor ?? "white",
                  minHeight: isMultiline ? multilineHeight : 40,
                },
                error ? styles.textInputError : {},
              ]}
              onChangeText={onChangeText}
              value={text}
              onPress={pressHandler}
              placeholder={placeholder}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={handleBlur}
              secureTextEntry={type === "password" && !showPassword}
              inputMode={
                type === "password" ? "text" : (type as InputModeOptions)
              }
              placeholderTextColor="#999"
              onSubmitEditing={onSubmit}
              multiline={isMultiline ?? false}
              numberOfLines={5}
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
        </View>
      </View>
      {error && (
        <HeadingText type="label" color={Colors.primary.p04}>
          {error}
        </HeadingText>
      )}
    </View>
  );
}
