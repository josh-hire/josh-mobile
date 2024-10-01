import { Colors } from "@constants/Colors";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

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
    const StyledSplitTextBoxes = isExpired || isCurrentValue
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

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInputHidden: {
    width: 300,
    borderColor: "#e5e5e5",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    opacity: 0,
    position: "absolute",
  },
  splitOTPBoxesContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  splitBoxes: {
    borderColor: Colors.neutral.n09,
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    minWidth: 42,
  },
  splitBoxesFocused: {
    borderColor: Colors.secondary.s07,
    borderWidth: 3,
    borderRadius: 8,
    padding: 5,
    minWidth: 42,
  },
  splitBoxesFilled: {
    borderColor: Colors.secondary.s07,
    backgroundColor: Colors.secondary.s07,
    borderWidth: 3,
    borderRadius: 8,
    padding: 5,
    minWidth: 42,
  },
  splitBoxesError: {
    borderColor: Colors.primary.p04,
    borderWidth: 3,
    borderRadius: 8,
    padding: 5,
    minWidth: 42,
  },
  splitBoxesText: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.neutral.n00,
  },
  splitBoxesTextError: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.neutral.n09,
  },
});
