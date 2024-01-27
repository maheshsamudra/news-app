import { Pressable, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { Stack, useLocalSearchParams } from "expo-router";
import LoadingAnimation from "../components/loading-animation";
import { Fontisto } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import colors from "../constants/colors";
import { checkIfSaved, toggleFavourite } from "../utils/saved-news";

export default function ViewNews() {
  const params = useLocalSearchParams();

  const article = params.article ? JSON.parse(params.article) : {};

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    checkIfSaved(params.url, setIsFavourite).then(() => null);
  }, []);

  const handleFavourite = async (e) => {
    e.stopPropagation();

    await toggleFavourite(article, setIsFavourite);

    checkIfSaved(params.url, setIsFavourite).then(() => null);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: params.title,
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Pressable onPress={handleFavourite} style={styles.bookmark}>
              <Fontisto
                name={!isFavourite ? "bookmark" : "bookmark-alt"}
                size={24}
                color={isFavourite ? colors.primary : "#888"}
              />
            </Pressable>
          ),
        }}
      />
      <WebView
        style={styles.container}
        source={{
          uri: params.url,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          zIndex: -1,
        }}
      >
        <LoadingAnimation />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  bookmark: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
