import { Link, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import useTopNews from "../../hooks/useTopNews";
import NewsBlock from "../../components/news-block";

export default function TopNews() {
  const { data } = useTopNews();

  console.log(data?.[3]);

  return (
    <ScrollView>
      {data?.map((article, idx) => (
        <NewsBlock article={article} key={idx} />
      ))}
    </ScrollView>
  );
}
