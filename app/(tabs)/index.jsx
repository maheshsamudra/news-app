import { useRouter } from "expo-router";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import useHomePage from "../../hooks/useHomePage";
import StyledText from "../../components/styled-text";
import fonts from "../../constants/fonts";
import StyledButton from "../../components/styled-button";
import LoadingAnimation from "../../components/loading-animation";
import NewsBlock from "../../components/news-block";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [refresh, setRefresh] = useState("");
  const { data, isLoading, inactive } = useHomePage(refresh);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setRefreshing(false);
    }
  }, [isLoading]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRefresh(new Date().toISOString());
  }, []);

  if (inactive) {
    return (
      <>
        <NoCategories />
      </>
    );
  }

  if (isLoading && !data?.length && !refreshing) {
    return <LoadingAnimation />;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.margin} />
      {data?.map((article, idx) => (
        <NewsBlock article={article} key={idx} />
      ))}
    </ScrollView>
  );
}

const NoCategories = () => {
  const router = useRouter();
  return (
    <View style={styles.noCategoriesWrapper}>
      <StyledText style={styles.noCategoriesTitle}>
        {`Welcome to News Global`}
      </StyledText>
      <StyledText center>
        This is your home page where you find your favourite categories!
      </StyledText>

      <StyledText center>
        You can pick your favourite categories from "My Settings" page.
      </StyledText>

      <View style={styles.button}>
        <StyledButton
          title={"Update My Categories"}
          onPress={() => router.push("/user-settings")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: { marginTop: 10 },
  noCategoriesTitle: {
    textAlign: "center",
    fontFamily: fonts.semiBold,
    fontSize: 20,
    marginVertical: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  noCategoriesWrapper: { padding: 20 },
});
