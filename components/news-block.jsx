import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import StyledText from "./styled-text";

const NewsBlock = ({ article }) => {
  const { title, url, urlToImage, source, publishedAt, author } = article;

  const router = useRouter();

  if (!title || !url || title === "[Removed]") return null;

  return (
    <View style={{ marginVertical: 8, marginHorizontal: 20 }}>
      <Pressable
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
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
        <StyledText muted>
          {new Intl.DateTimeFormat("en", {
            timeZone: "Asia/Colombo",
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(new Date(publishedAt))}
          {/*{formatInTimeZone(new Date(), "Asia/Colombo", "yyyy-MM-dd HH:mm:ss")}*/}
        </StyledText>
        <StyledText muted>
          {author || "N/A"} | {source.name}
        </StyledText>
        <StyledText variant={"title"}>{title}</StyledText>
      </Pressable>
    </View>
  );
};

export default NewsBlock;
