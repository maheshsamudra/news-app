import { Link, router, useRouter } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";
import useHomePage from "../../hooks/useHomePage";
import { useEffect, useState } from "react";
import { getFavouriteNews } from "../../utils/saved-news";
import NewsBlock from "../../components/news-block";
import StyledText from "../../components/styled-text";
import fonts from "../../constants/fonts";
import StyledButton from "../../components/styled-button";

export default function SavedNews() {
  const [news, setNews] = useState([]);

  const router = useRouter();

  const getSaved = async () => {
    getFavouriteNews().then((res) => {
      setNews(res);
    });
  };

  useEffect(() => {
    getSaved().then(() => null);
  }, []);

  return (
    <ScrollView>
      {news?.map((article, idx) => (
        <NewsBlock article={article} key={idx} callback={getSaved} />
      ))}

      {news?.length === 0 && <NoSavedNews />}
    </ScrollView>
  );
}

const NoSavedNews = () => {
  return (
    <View style={{ padding: 20 }}>
      <StyledText
        style={{
          textAlign: "center",
          fontFamily: fonts.semiBold,
          fontSize: 20,
          marginVertical: 20,
        }}
      >
        {`Congratulations,\nyou've caught up with all the news`}
      </StyledText>
      <StyledText style={{ textAlign: "center" }}>
        You do not have any saved news to read!
      </StyledText>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <StyledButton
          title={"Read Top News"}
          onPress={() => router.push("/top-news")}
        />
      </View>
    </View>
  );
};
