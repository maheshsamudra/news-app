import { Link, useRouter } from "expo-router";
import { Button, ScrollView, Text } from "react-native";
import useHomePage from "../../hooks/useHomePage";

export default function Home() {
  const router = useRouter();

  const { data } = useHomePage();
  return (
    <ScrollView>
      <Button
        title={"View"}
        onPress={() =>
          router.push({
            pathname: "/view-news",
            params: {
              url: "https://www.engadget.com/sec-approves-bitcoin-etfs-for-real-this-time-224125584.html",
              title: "SEC Approves bitcoin ETFs for real life transactions",
            },
          })
        }
      />
    </ScrollView>
  );
}
