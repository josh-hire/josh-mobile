import { Colors } from "@constants/Colors";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/jobPrefSection/profileJobPrefer.styles";
import ModalJobPref from "@modules/feature/profile/profileProfessionalInfoPage/sections/jobPrefSection/modalJobPrefer";
import { Assets } from "@constants/Assets";

export default function JobPrefSection() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [preference, setPreference] = useState<string>("");

  return (
    <View style={styles.jobPrefContainer}>
      <HeadingText type="h6" color={Colors.neutral.n00}>
        This is what you selected when you signed up, you can edit and we will
        deliver the job according to you preferences
      </HeadingText>
      <View style={styles.preferencesContainer}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setPreference("job");
          }}
        >
          <View style={styles.preferenceHeader}>
            <HeadingText type="h5" color="white" fontWeight="bold">
              Preferred Job
            </HeadingText>
            <Image source={Assets.icons.edit_2} />
          </View>
          <View style={styles.preferenceAnswer}>
            <HeadingText type="label" color="white">
              No Answer
            </HeadingText>
          </View>
          <View style={styles.preferenceLine} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setPreference("city");
          }}
        >
          <View style={styles.preferenceHeader}>
            <HeadingText type="h5" color="white" fontWeight="bold">
              City Preferences
            </HeadingText>
            <Image source={Assets.icons.edit_2} />
          </View>
          <View style={styles.preferenceAnswer}>
            <HeadingText type="label" color="white">
              No Answer
            </HeadingText>
          </View>
          <View style={styles.preferenceLine} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setPreference("workplace");
          }}
        >
          <View style={styles.preferenceHeader}>
            <HeadingText type="h5" color="white" fontWeight="bold">
              Workplace Models
            </HeadingText>
            <Image source={Assets.icons.edit_2} />
          </View>
          <View style={styles.preferenceAnswer}>
            <HeadingText type="label" color="white">
              No Answer
            </HeadingText>
          </View>
          <View style={styles.preferenceLine} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setPreference("worktype");
          }}
        >
          <View style={styles.preferenceHeader}>
            <HeadingText type="h5" color="white" fontWeight="bold">
              Work Type
            </HeadingText>
            <Image source={Assets.icons.edit_2} />
          </View>
          <View style={styles.preferenceAnswer}>
            <HeadingText type="label" color="white">
              No Answer
            </HeadingText>
          </View>
        </TouchableOpacity>
      </View>
      <ModalJobPref
        type={preference}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
