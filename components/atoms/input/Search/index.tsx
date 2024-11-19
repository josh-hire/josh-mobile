import React, { useState } from "react";
import {
  TextInput,
  View,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Colors } from "@constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import styles from "@components/atoms/input/Search/search.styles";

export type SearchProps = {
  text: string;
  onChangeText: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  placeholder: string;
  error?: string;
  borderColor?: string;
  textColor?: string;
};

export function Search({
  text,
  onChangeText,
  onSubmit,
  placeholder,
  error,
  borderColor,
  textColor,
}: Readonly<SearchProps>) {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <View style={[styles.container]}>
        <View
          style={[
            isFocused && styles.containerFocused,
            error ? styles.containerError : {},
          ]}
        >
          <Ionicons
            style={styles.icon}
            name="search"
            color={Colors.neutral.n02}
            size={20}
          />
          <TextInput
            style={[
              styles.textInput,
              isFocused && styles.textInputFocused,
              error ? styles.textInputError : {},
              {
                borderColor: borderColor ?? "black",
                color: textColor ?? "black",
              },
            ]}
            onChangeText={onChangeText}
            value={text}
            placeholder={placeholder}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={handleBlur}
            placeholderTextColor="#999"
            onSubmitEditing={onSubmit}
            numberOfLines={5}
          />
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
