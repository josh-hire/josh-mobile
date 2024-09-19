import { ThemedTextInput } from "@/components/atoms/input/ThemedTextInput";
import { HeadingText } from "@/components/atoms/text/HeadingText";

interface TextInputFormInterface {
  label: string;
  text: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  type: string;
  error?: string
}

export default function TextInputForm({
  label,
  text,
  onChangeText,
  placeholder,
  type,
  error,
}: TextInputFormInterface) {
  return (
    <>
      <HeadingText type="h6">{label}</HeadingText>
      <ThemedTextInput
        error={error}
        onChangeText={onChangeText}
        placeholder={placeholder}
        type={type}
        text={text}
      />
    </>
  );
}
