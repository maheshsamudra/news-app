import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import { Fontisto, AntDesign } from "@expo/vector-icons";

import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import React from "react";

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerTitleStyle: {
          fontFamily: fonts.normal,
        },
        tabBarStyle: {
          paddingTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabelStyle: {
            fontFamily: fonts.normal,
            fontSize: fonts.toolBarFontSize,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="top-news"
        options={{
          title: "Top News",
          tabBarLabelStyle: {
            fontFamily: fonts.normal,
            fontSize: fonts.toolBarFontSize,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="calculator" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarLabelStyle: {
            fontFamily: fonts.normal,
            fontSize: fonts.toolBarFontSize,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved-news"
        options={{
          title: "Saved News",
          tabBarLabelStyle: {
            fontFamily: fonts.normal,
            fontSize: fonts.toolBarFontSize,
          },
          tabBarIcon: ({ color }) => (
            <Fontisto name={"bookmark-alt"} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="user-settings"
        options={{
          title: "My Settings",
          tabBarLabelStyle: {
            fontFamily: fonts.normal,
            fontSize: fonts.toolBarFontSize,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
