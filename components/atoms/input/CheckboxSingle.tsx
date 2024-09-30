import { FlatList, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { HeadingText } from "../text/HeadingText";
import { useState } from "react";
import { Colors } from "@/constants/Colors";

interface CheckboxSingleProps {
  data: string[];
  onSelectionChange: (isSelected: boolean) => void;
  numColumns?: number;
  error?: string;
}

export default function CheckboxSingle({
  data,
  onSelectionChange,
  numColumns = 1,
  error,
}: CheckboxSingleProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    const newItem = selectedItem === item ? null : item;

    setSelectedItem(newItem);
    onSelectionChange(newItem !== null);
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
              selectedItem === item
                ? styles.checkboxChecked
                : error != null
                ? styles.checkboxError
                : styles.checkbox
            }
          >
            {selectedItem === item && (
              <View style={styles.checked}>
                <Image source={require("../../../assets/icons/check-01.png")} />
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
