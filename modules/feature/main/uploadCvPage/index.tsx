import { HeadingText } from "@components/atoms/text/HeadingText";
import styles from "@modules/feature/main/uploadCvPage/uploadCv.styles";
import globalStyles from "@styles/global.styles";
import { Alert, Image, TouchableOpacity, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import { Assets } from "@constants/Assets";
import { Colors } from "@constants/Colors";
import { PrimaryButton } from "@components/atoms/button/PrimaryButton";

interface FileType {
  name: string;
  file: string;
  size: string;
  uploadDate: Date;
}

function formatDateToDDMMYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

export default function UploadCvPage() {
  const [file, setFile] = useState<FileType | null>(null);
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setVisible(!visible);
  };

  const handleOptionSelect = () => {
    setVisible(false);
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
        copyToCacheDirectory: true,
      });

      if (result.assets && result.assets.length > 0) {
        const document = result.assets[0];
        const fileSizeMB = document.size ? document.size / (1024 * 1024) : 0;

        if (fileSizeMB > 10) {
          Alert.alert("File too large", "The file must be under 10 MB.");
        } else {
          setFile({
            name: document.name,
            file: document.uri,
            size: fileSizeMB.toFixed(2),
            uploadDate: new Date(),
          });
        }
      } else {
        Alert.alert("Cancelled", "No file was selected.");
      }
    } catch (error) {
      console.error("Error picking document: ", error);
      Alert.alert("Error", "Failed to pick the document.");
    }
  };

  return (
    <View style={[globalStyles.screen, styles.screenBackground]}>
      <TouchableOpacity
        style={[
          styles.uploadBox,
          { backgroundColor: file ? Colors.secondary.s08 : Colors.neutral.n03 },
        ]}
        onPress={pickDocument}
      >
        {file ? (
          <View style={styles.fileContainer}>
            <Image source={Assets.icons.file02} />
            <View>
              <HeadingText type="h6" color="white">
                {file.name}
              </HeadingText>
              <HeadingText type="label" color="white">
                {file.size} MB - Uploaded on{" "}
                {formatDateToDDMMYY(file.uploadDate)}
              </HeadingText>
            </View>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              {visible && (
                <View style={styles.menu}>
                  <TouchableOpacity
                    onPress={() => handleOptionSelect()}
                    style={styles.menuItem}
                  >
                    <HeadingText type="h6" color="white">
                      Download
                    </HeadingText>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleOptionSelect()}
                    style={styles.menuItem}
                  >
                    <HeadingText type="h6" color="white">
                      Delete
                    </HeadingText>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.uploadContainer}>
            <Image source={Assets.icons.plus01Blue}></Image>
            <HeadingText
              type="h5"
              fontWeight="bold"
              color={Colors.secondary.s08}
            >
              Upload your CV
            </HeadingText>
            <HeadingText
              type="label"
              color={Colors.secondary.s08}
              textAlign="center"
            >
              Please upload your cv in pdf or doc format, with a maximum upload
              of 10 mb.
            </HeadingText>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.saveButton}>
        <PrimaryButton title="Save" handler={() => {}} />
      </View>
    </View>
  );
}
