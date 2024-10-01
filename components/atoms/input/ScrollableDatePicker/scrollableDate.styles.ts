import { StyleSheet } from "react-native";

const ITEM_HEIGHT = 40;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  openButton: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  openButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  singleContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  scrollColumn: {
    width: 160,
    height: ITEM_HEIGHT * 3,
    paddingHorizontal: 24,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
  selectionOverlay: {
    position: "absolute",
    top: ITEM_HEIGHT + 33,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  closeButton: {
    marginTop: 16,
    alignSelf: "center",
  },
  closeButtonText: {
    fontSize: 16,
  },
});

export default styles;
