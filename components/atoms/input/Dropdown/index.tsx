import React, { useState, useRef } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import styles from "@components/atoms/input/Dropdown/dropdown.styles"

interface DropdownProps {
  data: string[];
  selectedValue: string | null;
  onValueChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  data,
  selectedValue,
  onValueChange,
  placeholder = "Select...",
  error
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string>(selectedValue || "");
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
    <View>
      <TouchableOpacity
        ref={dropdownRef}
        onPress={openDropdown}
        style={[styles.dropdown, error != null && styles.dropdownError ]}
      >
        <HeadingText type="h5" style={styles.selectedText}>
          {selected ? selected : placeholder}
        </HeadingText>
        {visible ? (
          <Image
            source={Assets.icons.chevronUp}
          ></Image>
        ) : (
          <Image
            source={Assets.icons.chevronDown}
          ></Image>
        )}
      </TouchableOpacity>

      <Modal visible={visible} transparent={true} animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View
            style={[
              styles.modalContainer,
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
                    styles.item,
                    pressedItem === item ? styles.itemPressed : null,
                  ]}
                >
                  <HeadingText
                    type="h5"
                    style={
                      pressedItem === item
                        ? styles.itemTextPressed
                        : styles.itemText
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
