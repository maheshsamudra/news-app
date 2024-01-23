import { Link, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import useTopNews from "../../hooks/useTopNews";
import NewsBlock from "../../components/news-block";

export default function TopNews() {
  const { data } = useTopNews();

  console.log(data?.[3]);

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
