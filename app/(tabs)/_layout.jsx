import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import { Pressable } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

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
        name="everything"
        options={{
          title: "Everything",
          tabBarLabelStyle: {
            fontFamily: fonts.normal,
            fontSize: fonts.toolBarFontSize,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="bars" size={24} color={color} />
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
