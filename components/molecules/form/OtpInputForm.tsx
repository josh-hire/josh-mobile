import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface OtpInputFormProps {
  otpCode: string;
  setOtpCode: Dispatch<SetStateAction<string>>;
  setIsPinReady: Dispatch<SetStateAction<boolean>>;
  maximumLength: number;
}

export default function OtpInputForm({
  otpCode,
  setOtpCode,
  setIsPinReady,
  maximumLength,
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
    const StyledSplitBoxes =
      isInputBoxFocused && isValueFocused ? styles.splitBoxesFocused : styles.splitBoxes;

    return (
      <View style={StyledSplitBoxes} key={index}>
        <Text style={styles.splitBoxesText}>{digit}</Text>
      </View>
    );
  };
  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const handleOnPress = () => {
    console.log('here');
    setIsInputBoxFocused(true);
    inputRef.current?.focus();
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={handleOnPress} style={styles.splitOTPBoxesContainer}>
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
    position: 'absolute'
  },
  splitOTPBoxesContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  splitBoxes: {
    borderColor: "#e5e5e5",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    minWidth: 30,
  },
  splitBoxesFocused: {
    borderColor: "#ecdbba",
    backgroundColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    minWidth: 30,
  },
  splitBoxesText: {
    fontSize: 20,
    textAlign: "center",
    color: "#e5e5e5",
  },
});
