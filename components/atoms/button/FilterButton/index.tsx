import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "@components/atoms/button/FilterButton/filterButton.styles";

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

export default function FilterButton({
  label,
  isSelected,
  onPress,
}: Readonly<FilterButtonProps>) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSelected ? styles.selectedButton : styles.unselectedButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          isSelected ? styles.selectedText : styles.unselectedText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
