import { Link, useRouter } from "expo-router";
import { ScrollView, Text } from "react-native";
import useTopNews from "../../hooks/useTopNews";
import StyledText from "../../components/styled-text";
import SearchBox from "../../components/search-box";

export default function Search() {
  const { data } = useTopNews();

  return (
    <ScrollView>
      <SearchBox />
    </ScrollView>
  );
}
