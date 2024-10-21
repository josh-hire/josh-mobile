import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(220,220,220,0.7)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  confirmContainer: {
    backgroundColor: "white",
    opacity: 1,
    padding: 30,
    borderRadius: 20,
    maxWidth: "80%",
    alignItems: "center",
  },
  confirmText: {
    marginBottom: 20,
  },
  confirmButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  confirmButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  cancelButton: {
    
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
