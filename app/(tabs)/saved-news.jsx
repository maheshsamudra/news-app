import { useFocusEffect, useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { useCallback, useState } from "react";
import { getFavouriteNews } from "../../utils/saved-news";
import NewsBlock from "../../components/news-block";
import StyledText from "../../components/styled-text";
import fonts from "../../constants/fonts";
import StyledButton from "../../components/styled-button";
import LoadingAnimation from "../../components/loading-animation";

export default function SavedNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSaved = async () => {
    setLoading(true);
    setNews([]);
    getFavouriteNews()
      .then((res) => {
        setNews(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useFocusEffect(
    useCallback(() => {
      getSaved().then(() => null);
    }, []),
  );

  return (
    <ScrollView>
      {loading && <LoadingAnimation />}
      {!loading &&
        news?.map((article, idx) => (
          <NewsBlock article={article} key={idx} callback={getSaved} />
        ))}

      {!loading && news?.length === 0 && <NoSavedNews />}
    </ScrollView>
  );
}

const NoSavedNews = () => {
  const router = useRouter();
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
