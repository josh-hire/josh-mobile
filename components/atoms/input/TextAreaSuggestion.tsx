import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  InputModeOptions,
} from "react-native";
import { HeadingText } from "../text/HeadingText";

export type TextAreaSuggestionProps = {
  text: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  type: string;
  error?: string;
  suggestions: string[];
};

export function TextAreaSuggestion({
  text,
  onChangeText,
  placeholder,
  type,
  error,
  suggestions,
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
                type="h5"
                style={[
                  styles.suggestionItem,
                  pressedItem === item
                    ? styles.itemTextPressed
                    : styles.itemText,
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
        <HeadingText type="label" style={{ color: Colors.primary.p04, marginTop: 5 }}>
          {error}
        </HeadingText>
      )}
    </View>
  );
}

const styles = {
  container: {
    marginBottom: 10,
    height: 40,
  },
  containerFocused: {
    elevation: 10,
  },
  containerError: {
    borderColor: Colors.primary.p04,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#FFF",
    flex: 1,
    fontSize: 16,
  },
  textInputFocused: {
    borderWidth: 2,
  },
  textInputError: {
    borderColor: Colors.primary.p04,
  },
  suggestionList: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.neutral.n02,
    maxHeight: 200,
    marginTop: 5,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  item: {
    borderWidth: 1,
    borderColor: Colors.neutral.n02,
  },
  itemPressed: {
    borderWidth: 1,
    backgroundColor: Colors.secondary.s05,
    color: Colors.neutral.n01,
    borderColor: Colors.neutral.n02,
  },
  itemText: {},
  itemTextPressed: {
    color: Colors.neutral.n01,
  },
};
