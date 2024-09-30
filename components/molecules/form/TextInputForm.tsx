import { ThemedTextInput } from "@/components/atoms/input/ThemedTextInput";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";

interface TextInputFormInterface {
  label: string;
  text: string;
  onChangeText: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  placeholder: string;
  type: string;
  error?: string;
}

export default function TextInputForm({
  label,
  text,
  onChangeText,
  onSubmit,
  placeholder,
  type,
  error,
}: TextInputFormInterface) {
  return (
    <>
      <HeadingText type="h4">{label}</HeadingText>
      <ThemedTextInput
        error={error}
        onChangeText={onChangeText}
        onSubmit={onSubmit}
        placeholder={placeholder}
        type={type}
        text={text}
      />
    </>
  );
}
