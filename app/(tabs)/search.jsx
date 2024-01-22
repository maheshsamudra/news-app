import { Link, useRouter } from "expo-router";
import { Text } from "react-native";
import useTopNews from "../../hooks/useTopNews";

export default function Search() {
  const { data } = useTopNews();

  console.log(data?.atricles?.length);
  return <Text>Hello</Text>;
}
