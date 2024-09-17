import { TextInput, type TextInputProps, StyleSheet } from 'react-native';

import { Dispatch, SetStateAction } from 'react';

export type ThemedTextInputProps = TextInputProps & {
  text: string,
  onChangeText: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type: string
};

export function ThemedTextInput({
  text,
  onChangeText,
  placeholder,
  type
}: ThemedTextInputProps) {

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
      secureTextEntry={type == 'password' ? true : false}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,

  },
});
