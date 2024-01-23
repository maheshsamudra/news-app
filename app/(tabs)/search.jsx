import { Link, useRouter } from "expo-router";
import { Text } from "react-native";
import useTopNews from "../../hooks/useTopNews";
import StyledText from "../../components/styled-text";

export default function Search() {
  const { data } = useTopNews();

  return <StyledText>Hello</StyledText>;
}
