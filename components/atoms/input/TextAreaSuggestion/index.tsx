import { Colors } from "@constants/Colors";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  InputModeOptions,
} from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import styles from "@components/atoms/input/TextAreaSuggestion/textAreaSuggestion.styles";

export type TextAreaSuggestionProps = {
  text: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  type: string;
  error?: string;
  suggestions: string[];
  label?: string;
  labelSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "paragraph";
  labelColor?: string;
  isRequired?: boolean;
  color?: string;
};

export function TextAreaSuggestion({
  text,
  onChangeText,
  placeholder,
  type,
  error,
  suggestions,
  label,
  labelSize,
  labelColor,
  isRequired,
  color,
}: TextAreaSuggestionProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [pressedItem, setPressedItem] = useState<string | null>(null);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChangeText = (input: string) => {
    onChangeText(input);
    if (input.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 4));
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionPress = (suggestion: string) => {
    onChangeText(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <View>
      {label && (
        <View style={styles.textLabelContainer}>
          <HeadingText type={labelSize ?? "h4"} color={labelColor ?? "white"}>
            {label}
          </HeadingText>
          {isRequired === true ? (
            <HeadingText type={labelSize ?? "h4"} color={labelColor ?? "white"}>
              *
            </HeadingText>
          ) : (
            <View />
          )}
        </View>
      )}
      <View
        style={[
          styles.container,
          isFocused && styles.containerFocused,
          error ? styles.containerError : {},
        ]}
      >
        <TextInput
          style={[
            styles.textInput,
            isFocused && styles.textInputFocused,
            error ? styles.textInputError : {},
            { color: color },
          ]}
          onChangeText={handleChangeText}
          value={text}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          inputMode={type === "password" ? "text" : (type as InputModeOptions)}
          placeholderTextColor={Colors.neutral.n03}
        />
      </View>
      {filteredSuggestions.length > 0 && (
        <FlatList
          data={filteredSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPressIn={() => setPressedItem(item)}
              onPressOut={() => setPressedItem(null)}
              onPress={() => handleSuggestionPress(item)}
              activeOpacity={1}
              style={[
                styles.item,
                pressedItem === item ? styles.itemPressed : null,
              ]}
            >
              <HeadingText
                type="h6"
                style={[
                  styles.suggestionItem,
                  pressedItem === item
                    ? styles.itemTextPressed
                    : styles.itemText,
                  { color: color },
                ]}
              >
                {item}
              </HeadingText>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.suggestionList}
        />
      )}

      {error && (
        <HeadingText
          type="label"
          style={{ color: Colors.primary.p04, marginTop: 5 }}
        >
          {error}
        </HeadingText>
      )}
    </View>
  );
}
