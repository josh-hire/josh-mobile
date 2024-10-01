import React, { useState, useRef } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { HeadingText } from "../text/HeadingText";
import { Colors } from "@constants/Colors";
import { Assets } from "@constants/Assets";

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

const styles = StyleSheet.create({
  dropdown: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.neutral.n09,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdownError: {
    borderColor: Colors.primary.p04,
    borderWidth: 2
  },
  selectedText: {
    color: "#000",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-start",
  },
  modalContainer: {
    position: "absolute",
    backgroundColor: "white",
    maxHeight: 300,
    borderColor: Colors.neutral.n02,
  },
  item: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.neutral.n02,
  },
  itemPressed: {
    padding: 15,
    borderWidth: 1,
    backgroundColor: Colors.secondary.s05,
    color: Colors.neutral.n01,
    borderColor: Colors.neutral.n02,
  },
  itemText: {},
  itemTextPressed: {
    color: Colors.neutral.n01,
  },
});

export default Dropdown;
