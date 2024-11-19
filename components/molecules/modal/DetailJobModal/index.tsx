import {
  Animated,
  GestureResponderHandlers,
  Image,
  ScrollView,
  View,
} from "react-native";
import styles from "@components/molecules/modal/DetailJobModal/detailJobModal.styles";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Assets } from "@/constants/Assets";

interface DetailJobModalProps {
  drawerTranslateY: Animated.AnimatedInterpolation<string | number>;
  panHandlers: GestureResponderHandlers;
}

export default function DetailJobModal({
  drawerTranslateY,
  panHandlers,
}: Readonly<DetailJobModalProps>) {
  return (
    <Animated.View
      style={[
        styles.drawer,
        {
          transform: [{ translateY: drawerTranslateY }],
        },
      ]}
    >
      <View style={styles.drawerHandle} {...panHandlers}>
        <Ionicons name="arrow-back" size={28} />
        <HeadingText type="h4" fontWeight="bold">
          Work Details
        </HeadingText>
        <View style={{ width: 20 }} />
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={Assets.images.telkomselLogo}
            />
          </View>
          <HeadingText type="h3" fontWeight="bold">
            Data Science
          </HeadingText>
          <View style={styles.rowContainer}>
            <Ionicons
              name={"location-outline"}
              size={16}
              color={Colors.neutral.n09}
            />
            <HeadingText type="h6">South Jakarta</HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText style={styles.borderBox} type="label">
              7 days ago
            </HeadingText>
            <HeadingText style={styles.borderBox} type="label">
              Full Time
            </HeadingText>
            <HeadingText style={styles.borderBox} type="label">
              Hybrid
            </HeadingText>
            <HeadingText style={styles.borderBox} type="label">
              Bachelor's degree
            </HeadingText>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <HeadingText type="h4" fontWeight="bold">
            Job Description
          </HeadingText>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText type="h6" style={styles.paragraphContainer}>
              Collection, cleaning, and munging of consumer data;
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText type="h6" style={styles.paragraphContainer}>
              Create recommendations based on consumers data analysis;
            </HeadingText>
          </View>
          <HeadingText type="h4" fontWeight="bold">
            Minimum Qualifications
          </HeadingText>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText type="h6" style={styles.paragraphContainer}>
              Bachelor Degree of Statistics or Mathematics.
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText type="h6" style={styles.paragraphContainer}>
              Passionate in Data Science and Statistic Tools.
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText type="h6" style={styles.paragraphContainer}>
              Adequate knowledge and experience of data analytics and query
              tools (Python/R/SPSS and SQL)
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText type="h6" style={styles.paragraphContainer}>
              Strong analytical and planning skills;
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText type="h6" style={styles.paragraphContainer}>
              Good communication and presentation skills;
            </HeadingText>
          </View>
          <View style={styles.rowContainer}>
            <HeadingText type="h6">{"\u2022"}</HeadingText>
            <HeadingText type="h6" style={styles.paragraphContainer}>
              Excellent problem-solving skills;
            </HeadingText>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <HeadingText type="h4" fontWeight="bold">
            About Company
          </HeadingText>
          <HeadingText style={styles.borderBox} type="label">
            5001-10,000 employees
          </HeadingText>
          <HeadingText type="h6">
            PT Telekomunikasi Selular or commonly abbreviated as Telkomsel, is a
            subsidiary of Telkom Indonesia engaged in telecommunications for
            individual consumers.
          </HeadingText>
        </View>
        <View style={styles.bodyContainer}>
          <HeadingText type="h4" fontWeight="bold">
            Office Address
          </HeadingText>
          <HeadingText type="h6">
            The Telkom Hub, Jl. Gatot Subroto No.Kav.52, RT.6/RW.1, Kuningan
            Bar., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus
            Ibukota Jakarta, 12710
          </HeadingText>
        </View>
      </ScrollView>
    </Animated.View>
  );
}
