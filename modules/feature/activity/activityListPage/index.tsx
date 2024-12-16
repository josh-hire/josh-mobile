import { HeadingText } from "@components/atoms/text/HeadingText";
import ChatListCard from "@components/molecules/card/chatListCard";
import { Assets } from "@constants/Assets";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/activity/activityListPage/activityList.styles";
import { Search } from "@components/atoms/input/Search";
import { useState } from "react";
import { Colors } from "@constants/Colors";
import ActivityModal from "@modules/feature/activity/activityListPage/activityModal";

export default function ActivityLIstPage() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("left");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const jobsData = [
    {
      id: 1,
      name: "Data Scientist",
      company: "Telkomsel",
      message: "South Jakarta - Full Time - Hybrid",
      date: "Nov 11",
      category: "left",
    },
    {
      id: 2,
      name: "Data Scientist",
      company: "Telkomsel",
      message: "South Jakarta - Full Time - Hybrid",
      date: "Nov 11",
      category: "left",
    },
    {
      id: 3,
      name: "Software Engineer",
      company: "Telkomsel",
      message: "South Jakarta - Full Time - Hybrid",
      date: "Nov 11",
      category: "right",
    },
    {
      id: 4,
      name: "Data Scientist",
      company: "Telkomsel",
      message: "South Jakarta - Full Time - Hybrid",
      date: "Nov 11",
      category: "left",
    },
    {
      id: 5,
      name: "Software Engineer",
      company: "Telkomsel",
      message: "South Jakarta - Full Time - Hybrid",
      date: "Nov 11",
      category: "right",
    },
    {
      id: 6,
      name: "Software Engineer",
      company: "Telkomsel",
      message: "South Jakarta - Full Time - Hybrid",
      date: "Nov 11",
      category: "right",
    },
    {
      id: 7,
      name: "UI/UX Designer",
      company: "Telkomsel",
      message: "South Jakarta - Full Time - Hybrid",
      date: "Nov 11",
      category: "match",
    },
    {
      id: 8,
      name: "UI/UX Designer",
      company: "Telkomsel",
      message: "South Jakarta - Full Time - Hybrid",
      date: "Nov 11",
      category: "match",
    },
  ];

  const filterDataByCategory = (category: string) => {
    return jobsData.filter((item) => item.category === category);
  };

  return (
    <SafeAreaView style={[globalStyles.screen, styles.screenBackground]}>
      <View style={styles.activityContainer}>
        <HeadingText color="white" type="h5" fontWeight="bold">
          My Activity
        </HeadingText>
        <Search
          onChangeText={setSearchValue}
          placeholder="Search"
          text={searchValue}
          onSubmit={() => {}}
          borderColor={Colors.neutral.n02}
          textColor="white"
        />
        <View style={styles.navbarContainer}>
          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("left");
            }}
          >
            <HeadingText
              type="h6"
              color={selectedCategory === "left" ? "white" : Colors.neutral.n01}
              fontWeight={selectedCategory === "left" ? "bold" : "regular"}
            >
              Swipe Left
            </HeadingText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("match");
            }}
          >
            <HeadingText
              type="h6"
              color={
                selectedCategory === "match" ? "white" : Colors.neutral.n01
              }
              fontWeight={selectedCategory === "match" ? "bold" : "regular"}
            >
              Matches
            </HeadingText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("right");
            }}
          >
            <HeadingText
              type="h6"
              color={
                selectedCategory === "right" ? "white" : Colors.neutral.n01
              }
              fontWeight={selectedCategory === "right" ? "bold" : "regular"}
            >
              Swipe Right
            </HeadingText>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {filterDataByCategory(selectedCategory).map((item, index) => (
            <ChatListCard
              key={item.id}
              isLast={
                index === filterDataByCategory(selectedCategory).length - 1
              }
              imageUrl={Assets.images.telkomselLogo}
              name={item.name}
              company={item.company}
              message={item.message}
              date={item.date}
              handler={() => {
                setIsModalVisible(true);
              }}
            />
          ))}
        </ScrollView>
      </View>
      <ActivityModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </SafeAreaView>
  );
}
