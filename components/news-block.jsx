import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import StyledText from "./styled-text";

const NewsBlock = ({ article }) => {
  const { title, url, urlToImage, source, publishedAt, author } = article;

  const router = useRouter();

  console.log(title, urlToImage);

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
        {urlToImage && (
          <Image source={{ uri: urlToImage }} style={styles.image} />
        )}
        <View style={styles.textWrapper}>
          <StyledText muted variant={"newsMeta"} numberOfLines={1}>
            {formattedDate} - {source.name}
          </StyledText>
          <StyledText variant={"title"} style={styles.title}>
            {title}
          </StyledText>
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
});
