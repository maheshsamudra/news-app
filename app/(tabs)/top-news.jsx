import { ScrollView, RefreshControl, View, StyleSheet } from "react-native";
import useTopNews from "../../hooks/useTopNews";
import NewsBlock from "../../components/news-block";
import LoadingAnimation from "../../components/loading-animation";
import { useCallback, useEffect, useState } from "react";

export default function TopNews() {
  const [refresh, setRefresh] = useState("");

  const { data, isLoading } = useTopNews(refresh);

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

const styles = StyleSheet.create({
  margin: { marginTop: 10 },
});
