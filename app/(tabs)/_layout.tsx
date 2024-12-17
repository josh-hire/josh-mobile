import { Assets } from "@constants/Assets";
import { Colors } from "@constants/Colors";
import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.general.background,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarActiveTintColor: Colors.neutral.n00,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Assets.icons.home_fill : Assets.icons.home}
              style={{ width: 28, height: 28 }}
            ></Image>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarActiveTintColor: Colors.neutral.n00,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? Assets.icons.message_fill : Assets.icons.message
              }
              style={{ width: 28, height: 28 }}
            ></Image>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "My Activity",
          tabBarActiveTintColor: Colors.neutral.n00,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? Assets.icons.activity_fill : Assets.icons.activity
              }
              style={{ width: 28, height: 28 }}
            ></Image>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarActiveTintColor: Colors.neutral.n00,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? Assets.icons.profile_fill : Assets.icons.profile
              }
              style={{ width: 28, height: 28 }}
            ></Image>
          ),
        }}
      />
    </Tabs>
  );
}
