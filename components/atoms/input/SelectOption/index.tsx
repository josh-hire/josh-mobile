import React, { useState } from "react";
import { View } from "react-native";
import FilterButton from "@/components/atoms/button/FilterButton";
import styles from "@components/atoms/input/SelectOption/selectOption.styles";
import { HeadingText } from "../../text/HeadingText";

interface FilterProps {
  title: string;
  options: string[];
  selectMultiple?: boolean;
  onSelect: (options: string[]) => void;
}

export function Filter({
  title,
  options,
  selectMultiple = false,
  onSelect,
}: Readonly<FilterProps>) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleMultipleSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      const newSelected = selectedOptions.filter((item) => item !== option);
      setSelectedOptions(newSelected);
      onSelect(newSelected);
    } else {
      const newSelected = [...selectedOptions, option];
      setSelectedOptions(newSelected);
      onSelect(newSelected);
    }
  };

  const handleSingleSelect = (option: string) => {
    setSelectedOptions([option]);
    onSelect([option]);
  };

  const handleSelect = selectMultiple
    ? handleMultipleSelect
    : handleSingleSelect;

  return (
    <View style={styles.container}>
      <HeadingText type="h5" fontWeight="bold">
        {title}
      </HeadingText>
      <View style={styles.optionContainer}>
        {options.map((option) => (
          <FilterButton
            key={option}
            label={option}
            isSelected={selectedOptions.includes(option)}
            onPress={() => handleSelect(option)}
          />
        ))}
      </View>
    </View>
  );
}

export default Filter;
