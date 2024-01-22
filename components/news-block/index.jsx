import React from "react";
import { Image, Pressable, Text, View } from "react-native";
// import { formatInTimeZone } from "date-fns-tz";

const NewsBlock = ({ article }) => {
  const { title, url, urlToImage, source, publishedAt, author } = article;

  if (!title || !url || title === "[Removed]") return null;

  return (
    <View style={{ margin: 20 }}>
      <Pressable
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
        {urlToImage && <Image source={{ url: urlToImage }} />}
        {/*<Text>*/}
        {/*  {formatInTimeZone(new Date(), "Asia/Colombo", "yyyy-MM-dd HH:mm:ss")}*/}
        {/*</Text>*/}
        <Text>
          {author || "N/A"} | {source.name}
        </Text>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default NewsBlock;
