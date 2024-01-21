import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { Stack, useLocalSearchParams } from "expo-router";

export default function ViewNews() {
  const params = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: params.title,
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <WebView
        style={styles.container}
        source={{
          uri: params.url,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
