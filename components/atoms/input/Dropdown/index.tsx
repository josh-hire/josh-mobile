import React, { useState, useRef } from "react";
import { Modal, View, TouchableOpacity, FlatList, Image } from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import styles from "@components/atoms/input/Dropdown/dropdown.styles";

interface DropdownProps {
  data: string[];
  selectedValue: string | null;
  onValueChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  color?: string;
  label?: string;
  labelSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "paragraph";
  labelColor?: string;
  isRequired?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  data,
  selectedValue,
  onValueChange,
  placeholder = "Select...",
  error,
  color = "black",
  label,
  labelSize,
  labelColor,
  isRequired = false,
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string>(selectedValue ?? "");
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const [pressedItem, setPressedItem] = useState<string | null>(null);

  const dropdownRef = useRef<TouchableOpacity>(null);

  const openDropdown = () => {
    dropdownRef.current?.measure((fx, fy, width, height, px, py) => {
      setDropdownPosition({ top: py + height, left: px, width: width });
    });
    setVisible(true);
  };

  const handleSelect = (item: string) => {
    setSelected(item);
    onValueChange(item);
    setVisible(false);
    setPressedItem(null);
  };

  return (
    <View style={styles(color).container}>
      <View style={styles(color).textLabelContainer}>
        <HeadingText type={labelSize ?? "h4"} color={labelColor ?? "black"}>
          {label}
        </HeadingText>
        {isRequired === true ? (
          <HeadingText type={labelSize ?? "h4"} color={labelColor ?? "black"}>
            *
          </HeadingText>
        ) : (
          <View />
        )}
      </View>
      <TouchableOpacity
        ref={dropdownRef}
        onPress={openDropdown}
        style={[
          styles(color).dropdown,
          error != null && styles(color).dropdownError,
        ]}
      >
        <HeadingText type="h6" color={selected ? color : "#999"}>
          {selected || placeholder}
        </HeadingText>
        {visible ? (
          <Image source={Assets.icons.chevronUp}></Image>
        ) : (
          <Image source={Assets.icons.chevronDown}></Image>
        )}
      </TouchableOpacity>

      <Modal visible={visible} transparent={true} animationType="fade">
        <TouchableOpacity
          style={styles(color).overlay}
          onPress={() => setVisible(false)}
        >
          <View
            style={[
              styles(color).modalContainer,
              {
                top: dropdownPosition.top - 40,
                left: dropdownPosition.left,
                width: dropdownPosition.width,
              },
            ]}
          >
            <FlatList
              data={data}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPressIn={() => setPressedItem(item)}
                  onPressOut={() => setPressedItem(null)}
                  onPress={() => handleSelect(item)}
                  activeOpacity={1}
                  style={[
                    styles(color).item,
                    pressedItem === item ? styles(color).itemPressed : null,
                  ]}
                >
                  <HeadingText
                    type="h6"
                    color={color}
                    style={
                      pressedItem === item
                        ? styles(color).itemTextPressed
                        : styles(color).itemText
                    }
                  >
                    {item}
                  </HeadingText>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Dropdown;
