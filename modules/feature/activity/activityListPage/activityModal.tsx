import { Image, Modal, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/activity/activityListPage/activityList.styles";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@constants/Colors";
import { Assets } from "@constants/Assets";
import { Dispatch, SetStateAction } from "react";

interface ActivityModalProps {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ActivityModal({
  isModalVisible,
  setIsModalVisible,
}: Readonly<ActivityModalProps>) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(true)}
    >
      <View style={styles.drawerHandle}>
        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
          <Ionicons name="arrow-back" size={28} color={"white"} />
        </TouchableOpacity>
        <HeadingText type="h4" fontWeight="bold">
          Telkomsel
        </HeadingText>
        <View style={{ width: 20 }} />
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <HeadingText type="h6" color="black">
              We are looking for data scientist
            </HeadingText>
          </View>
          <ScrollView horizontal={true}>
            <HeadingText style={styles.borderBox} type="h6">
              <Ionicons
                name="bag-outline"
                size={18}
                color={Colors.secondary.s03}
              />
              {"   "}
              Full Time, Offline
            </HeadingText>
            <HeadingText style={styles.borderBox} type="h6">
              <Ionicons
                name="location-outline"
                size={18}
                color={Colors.secondary.s03}
              />
              {"   "}
              South Jakarta, Indonesia
            </HeadingText>
            <HeadingText style={styles.borderBox} type="h6">
              <Ionicons
                name="cash-outline"
                size={18}
                color={Colors.secondary.s03}
              />
              {"   "}
              IDR 8.000.000 - 9.000.000
            </HeadingText>
            <HeadingText style={styles.borderBox} type="h6">
              <Ionicons
                name="school-outline"
                size={18}
                color={Colors.secondary.s03}
              />
              {"   "}
              Bachelor's degree
            </HeadingText>
          </ScrollView>
        </View>
        <View style={styles.bodyContainer}>
          <HeadingText type="h4" fontWeight="bold" color={Colors.secondary.s03}>
            Job Description
          </HeadingText>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText
              type="h6"
              textAlign="justify"
              style={styles.paragraphContainer}
            >
              Collection, cleaning, and munging of consumer data;
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText
              type="h6"
              textAlign="justify"
              style={styles.paragraphContainer}
            >
              Create recommendations based on consumers data analysis;
            </HeadingText>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <HeadingText type="h4" fontWeight="bold" color={Colors.secondary.s03}>
            Minimum Qualifications
          </HeadingText>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText
              type="h6"
              textAlign="justify"
              style={styles.paragraphContainer}
            >
              Bachelor Degree of Statistics or Mathematics.
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText
              type="h6"
              textAlign="justify"
              style={styles.paragraphContainer}
            >
              Passionate in Data Science and Statistic Tools.
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText
              type="h6"
              textAlign="justify"
              style={styles.paragraphContainer}
            >
              Adequate knowledge and experience of data analytics and query
              tools (Python/R/SPSS and SQL)
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText
              type="h6"
              textAlign="justify"
              style={styles.paragraphContainer}
            >
              Strong analytical and planning skills;
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText
              type="h6"
              textAlign="justify"
              style={styles.paragraphContainer}
            >
              Good communication and presentation skills;
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText
              type="h6"
              textAlign="justify"
              style={styles.paragraphContainer}
            >
              Excellent problem-solving skills;
            </HeadingText>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <HeadingText type="h4" fontWeight="bold" color={Colors.secondary.s03}>
            About Us
          </HeadingText>
          <View style={styles.rowContainer}>
            <Ionicons name="business" color={Colors.secondary.s03} size={28} />
            <View>
              <HeadingText type="h6" textAlign="justify">
                PT Telekomunikasi Selular
              </HeadingText>
              <HeadingText type="label" textAlign="justify">
                5001-10,000 employees
              </HeadingText>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Ionicons name="location" color={Colors.secondary.s03} size={28} />
            <HeadingText type="h6" textAlign="justify">
              The Telkom Hub, Jl. Gatot Subroto No.Kav.52, RT.6/RW.1, Kuningan
              Bar., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus
              Ibukota Jakarta, 12710
            </HeadingText>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
