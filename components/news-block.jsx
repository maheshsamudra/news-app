import React, { useCallback, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import StyledText from "./styled-text";
import { Fontisto } from "@expo/vector-icons";
import colors from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkIfSaved, toggleFavourite } from "../utils/saved-news";

const NewsBlock = ({ article, callback = () => null }) => {
  const { title, url, urlToImage, source, publishedAt } = article;

  const router = useRouter();

  const [isFavourite, setIsFavourite] = useState(false);

  useFocusEffect(
    useCallback(() => {
      checkIfSaved(url, setIsFavourite).then(() => null);
    }, []),
  );

  useEffect(() => {
    checkIfSaved(url, setIsFavourite).then(() => null);
  }, []);

  const handleFavourite = async (e) => {
    e.stopPropagation();

    await toggleFavourite(article, setIsFavourite);

    callback();
  };

  const formattedDate = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(publishedAt));

  if (!title || !url || title === "[Removed]") return null;

  return (
    <View style={{ marginVertical: 8, marginHorizontal: 20 }}>
      <Pressable
        style={styles.newsBlockWrapper}
        onPress={() =>
          router.push({
            pathname: "/view-news",
            params: {
              url,
              title,
            },
          })
        }
      >
        <Pressable onPress={handleFavourite} style={styles.bookmark}>
          <Fontisto
            name={!isFavourite ? "bookmark" : "bookmark-alt"}
            size={24}
            color={isFavourite ? colors.primary : "#888"}
          />
        </Pressable>
        {urlToImage && (
          <Image source={{ uri: urlToImage }} style={styles.image} />
        )}
        <View style={styles.textWrapper}>
          <StyledText variant={"newsMeta"} numberOfLines={1}>
            {formattedDate}
          </StyledText>
          <StyledText
            variant={"title"}
            style={styles.title}
            numberOfLines={urlToImage ? 3 : 5}
          >
            {title}
          </StyledText>
          <View style={{ flexDirection: "row" }}>
            <StyledText variant={"badge"} numberOfLines={1}>
              {source.name}
            </StyledText>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default NewsBlock;

const styles = StyleSheet.create({
  newsBlockWrapper: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    flexDirection: "row",
    position: "relative",
  },
  textWrapper: { overflow: "hidden", flex: 1 },
  image: {
    height: 120,
    width: 100,
    borderRadius: 4,
    objectFit: "cover",
    marginRight: 9,
    backgroundColor: "#eee",
  },
  title: { marginVertical: 6 },
  bookmark: {
    position: "absolute",
    right: 0,
    top: -3,
    paddingBottom: 16,
    paddingHorizontal: 15,
    zIndex: 10,
  },
});
