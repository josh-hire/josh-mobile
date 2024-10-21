import {
  Image,
  Modal,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "@components/molecules/modal/FIlterModal/filterModal.styles";
import { Dispatch, SetStateAction, useState } from "react";
import { Assets } from "@constants/Assets";
import { HeadingText } from "@components/atoms/text/HeadingText";
import FilterJobsForm from "../../form/FilterJobsForm";
import ConfirmationModal from "../ConfirmationModal";

interface FilterModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export default function FilterModal({
  isVisible,
  setIsVisible,
}: Readonly<FilterModalProps>) {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const handleCloseModal = () => {
    setIsConfirmVisible(false);
    setIsVisible(false);
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsConfirmVisible(true)}
      >
        <View style={styles.centeredView}>
          <View style={styles.closedContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsConfirmVisible(true)}
            >
              <Image source={Assets.icons.arrowBack} style={styles.closeIcon} />
            </TouchableOpacity>

            <HeadingText type="h4" fontWeight="bold">
              Filter your dream job
            </HeadingText>
            <View></View>
          </View>

          <View style={styles.mainContainer}>
            <FilterJobsForm />
          </View>
        </View>
      </Modal>

      <ConfirmationModal
        isConfirmVisible={isConfirmVisible}
        setIsConfirmVisible={setIsConfirmVisible}
        handleCloseModal={handleCloseModal}
        title="Cancel all edits?"
        description="everything you change will not be saved"
      />
    </View>
  );
}
