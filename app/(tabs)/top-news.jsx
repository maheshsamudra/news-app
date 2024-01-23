import { Link, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import useTopNews from "../../hooks/useTopNews";
import NewsBlock from "../../components/news-block";
import LoadingAnimation from "../../components/loading-animation";

export default function TopNews() {
  const { data, isLoading } = useTopNews();

  if (isLoading && !data?.length) {
    return <LoadingAnimation />;
  }

  return (
    <ScrollView>
      <View style={{ marginTop: 10 }} />
      {data?.map((article, idx) => (
        <NewsBlock article={article} key={idx} />
      ))}
    </ScrollView>
  );
}

const product = {
  id: "id",
  name: "name",
  variantNames: [
    {
      id: "variant-id",
      name: "name",
      values: [
        {
          id: "value-id",
          value: "value",
        },
      ],
    },
  ],
};
