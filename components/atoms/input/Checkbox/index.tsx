import React, { useState } from "react";
import { FlatList, TouchableOpacity, View, Image } from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import styles from "@/components/atoms/input/Checkbox/checkbox.styles";

interface CheckboxListProps {
  data: string[];
  onSelectionChange: (selectedItems: string[]) => void;
  numColumns?: number;
  error?: string;
  color?: string;
}

export default function CheckboxList({
  data,
  onSelectionChange,
  numColumns = 1,
  error,
  color,
}: Readonly<CheckboxListProps>) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (item: string) => {
    let updatedSelectedItems = [...selectedItems];

    if (selectedItems.includes(item)) {
      updatedSelectedItems = updatedSelectedItems.filter((i) => i !== item);
    } else {
      updatedSelectedItems.push(item);
    }

    setSelectedItems(updatedSelectedItems);
    onSelectionChange(updatedSelectedItems);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => handleSelect(item)}
        >
          <View
            style={[
              selectedItems.includes(item)
                ? styles.checkboxChecked
                : error != null
                ? styles.checkboxError
                : styles.checkbox,
              { borderColor: color },
            ]}
          >
            {selectedItems.includes(item) && (
              <View style={styles.checked}>
                <Image source={Assets.icons.check01}></Image>
              </View>
            )}
          </View>
          <HeadingText type="h6" color={color}>
            {item}
          </HeadingText>
        </TouchableOpacity>
      )}
      numColumns={numColumns}
      columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
    />
  );
}
