import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBox from "../../components/search-box";
import useNewsSearch from "../../hooks/useNewsSearch";
import LoadingAnimation from "../../components/loading-animation";
import NewsBlock from "../../components/news-block";
import { useState } from "react";
import StyledText from "../../components/styled-text";

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

          {searchString && data?.length === 0 && <NoResults />}
        </>
      )}
    </ScrollView>
  );
}

const NoResults = () => {
  return (
    <View>
      <StyledText center variant={"title"} style={styles.noResultsTitle}>
        No Results Found!
      </StyledText>
      <StyledText center>
        Please change the search query and try again.
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: { marginTop: 10 },
  noResultsTitle: { marginBottom: 10 },
});
