import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/activity/activityListPage/activityList.styles";
import { Search } from "@components/atoms/input/Search";
import { useState } from "react";
import { Colors } from "@constants/Colors";
import ActivityModal from "@modules/feature/activity/activityListPage/activityModal";
import ActivityCard from "@components/molecules/card/activityCard";

export default function ActivityLIstPage() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("left");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const jobsData = [
    {
      id: 1,
      name: "Data Scientist",
      salary: "IDR 8.000.000",
      location: "South Jakarta",
      category: "left",
    },
    {
      id: 2,
      name: "Data Scientist",
      salary: "IDR 8.000.000",
      location: "South Jakarta",
      category: "left",
    },
    {
      id: 3,
      name: "Software Engineer",
      salary: "IDR 8.000.000",
      location: "South Jakarta",
      category: "right",
    },
    {
      id: 4,
      name: "Data Scientist",
      salary: "IDR 8.000.000",
      location: "South Jakarta",
      category: "left",
    },
    {
      id: 5,
      name: "Software Engineer",
      salary: "IDR 8.000.000",
      location: "South Jakarta",
      category: "right",
    },
    {
      id: 6,
      name: "Software Engineer",
      salary: "IDR 8.000.000",
      location: "South Jakarta",
      category: "right",
    },
    {
      id: 7,
      name: "UI/UX Designer",
      salary: "IDR 8.000.000",
      location: "South Jakarta",
      category: "match",
    },
    {
      id: 8,
      name: "UI/UX Designer",
      salary: "IDR 8.000.000",
      location: "South Jakarta",
      category: "match",
    },
  ];

  const filterDataByCategory = (category: string) => {
    return jobsData.filter((item) => item.category === category);
  };

  return (
    <SafeAreaView style={[globalStyles.screen, styles.screenBackground]}>
      <View style={styles.activityContainer}>
        <HeadingText
          color="white"
          type="h4"
          textAlign="center"
          fontWeight="bold"
        >
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
            style={selectedCategory === "left" && styles.navbarItem}
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
            style={selectedCategory === "match" && styles.navbarItem}
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
            style={selectedCategory === "right" && styles.navbarItem}
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
        <ScrollView contentContainerStyle={styles.container}>
          {filterDataByCategory(selectedCategory).map((item, index) => (
            <ActivityCard
              key={item.id}
              imageUrl={Assets.images.login}
              name={item.name}
              salary={item.salary}
              location={item.location}
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
