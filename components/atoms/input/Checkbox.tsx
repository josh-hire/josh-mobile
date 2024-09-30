import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { HeadingText } from "../text/HeadingText";
import { Assets } from "@/constants/Assets";

interface CheckboxListProps {
  data: string[];
  onSelectionChange: (selectedItems: string[]) => void;
  numColumns?: number;
  error?: string;
}

export default function CheckboxList({
  data,
  onSelectionChange,
  numColumns = 1,
  error
}: CheckboxListProps) {
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
            style={
              selectedItems.includes(item)
                ? styles.checkboxChecked
                : error != null ? styles.checkboxError : styles.checkbox
            }
          >
            {selectedItems.includes(item) && (
              <View style={styles.checked}>
                <Image
                  source={Assets.icons.check01}
                ></Image>
              </View>
            )}
          </View>
          <HeadingText type="h6" style={styles.label}>
            {item}
          </HeadingText>
        </TouchableOpacity>
      )}
      numColumns={numColumns} 
      columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
    />
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    flex: 1,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: Colors.neutral.n09,
    marginRight: 10,
  },
  checkboxError: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: Colors.primary.p04,
    marginRight: 10,
  },
  checkboxChecked: {
    width: 18,
    height: 18,
    borderColor: Colors.neutral.n09,
    marginRight: 10,
  },
  checked: {
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary.s05,
  },
  label: {
    fontSize: 16,
    color: "#000",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
