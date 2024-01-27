import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBox from "../../components/search-box";
import useNewsSearch from "../../hooks/useNewsSearch";
import LoadingAnimation from "../../components/loading-animation";
import NewsBlock from "../../components/news-block";
import { useState } from "react";

export default function Search() {
  const [searchString, setSearchString] = useState("");

  const { data, isLoading } = useNewsSearch(searchString);

  return (
    <ScrollView>
      <SearchBox search={setSearchString} />

      {isLoading && <LoadingAnimation />}

      <View style={styles.margin} />
      {!isLoading && (
        <>
          {data?.map((article, idx) => (
            <NewsBlock article={article} key={idx} />
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  margin: { marginTop: 10 },
});
