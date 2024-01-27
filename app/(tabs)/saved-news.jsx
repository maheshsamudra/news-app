import { useFocusEffect, useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { useCallback, useState } from "react";
import { getFavouriteNews } from "../../utils/saved-news";
import NewsBlock from "../../components/news-block";
import StyledText from "../../components/styled-text";
import fonts from "../../constants/fonts";
import StyledButton from "../../components/styled-button";
import LoadingAnimation from "../../components/loading-animation";
import colors from "../../constants/colors";

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
    <View style={styles.noSavedNewsWrapper}>
      <StyledText style={styles.heading}>
        {`Congratulations,\nyou've caught up with all the news`}
      </StyledText>
      <StyledText center>You do not have any saved news to read!</StyledText>

      <View style={styles.button}>
        <StyledButton
          title={"Read Top News"}
          onPress={() => router.push("/top-news")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noSavedNewsWrapper: { padding: 20 },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  heading: {
    textAlign: "center",
    fontFamily: fonts.semiBold,
    fontSize: 20,
    marginVertical: 20,
  },
});
