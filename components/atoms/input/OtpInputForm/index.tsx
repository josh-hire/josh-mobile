import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "@components/atoms/input/OtpInputForm/otpInput.styles";
import React from "react";

interface OtpInputFormProps {
  otpCode: string;
  setOtpCode: Dispatch<SetStateAction<string>>;
  setIsPinReady: Dispatch<SetStateAction<boolean>>;
  maximumLength: number;
  isExpired: boolean;
}

export default function OtpInputForm({
  otpCode,
  setOtpCode,
  setIsPinReady,
  maximumLength,
  isExpired,
}: OtpInputFormProps) {
  const [isInputBoxFocused, setIsInputBoxFocused] = useState<boolean>(true);

  const boxArray = new Array<number>(maximumLength).fill(0);
  const inputRef = useRef<TextInput>(null);

  const boxDigit = (_: any, index: number) => {
    const emptyInput: string = "";
    const digit = otpCode[index] || emptyInput;

    const isCurrentValue = index === otpCode.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = otpCode.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);
    const StyledSplitBoxes = isExpired
      ? styles.splitBoxesError
      : digit != ""
      ? styles.splitBoxesFilled
      : isInputBoxFocused && isValueFocused
      ? styles.splitBoxesFocused
      : styles.splitBoxes;
    const StyledSplitTextBoxes =
      isExpired || isCurrentValue
        ? styles.splitBoxesTextError
        : styles.splitBoxesText;

    return (
      <View style={StyledSplitBoxes} key={index}>
        <Text style={StyledSplitTextBoxes}>{isCurrentValue ? "|" : digit}</Text>
      </View>
    );
  };
  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current?.focus();
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={handleOnPress}
          style={styles.splitOTPBoxesContainer}
        >
          {boxArray.map(boxDigit)}
        </Pressable>
        <TextInput
          value={otpCode}
          onChangeText={setOtpCode}
          ref={inputRef}
          maxLength={maximumLength}
          onBlur={handleOnBlur}
          style={styles.textInputHidden}
        ></TextInput>
      </View>
    </>
  );
}
