import { FlatList, TouchableOpacity, View, Image } from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { Assets } from "@constants/Assets";
import styles from "@components/atoms/input/CheckboxSingle/checkboxSingle.styles";

interface CheckboxSingleProps {
  data: string[];
  onSelectionChange: (isSelected: boolean) => void;
  numColumns?: number;
  error?: string;
  color?: string;
}

export default function CheckboxSingle({
  data,
  onSelectionChange,
  numColumns = 1,
  error,
  color,
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
            style={[
              selectedItem === item
                ? styles.checkboxChecked
                : error != null
                ? styles.checkboxError
                : styles.checkbox,
            ]}
          >
            {selectedItem === item && (
              <View style={styles.checked}>
                <Image source={Assets.icons.check01} />
              </View>
            )}
          </View>
          <HeadingText type="h6" style={styles.label} color={"white"}>
            {item}
          </HeadingText>
        </TouchableOpacity>
      )}
      numColumns={numColumns}
      columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
    />
  );
}
