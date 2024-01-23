import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { Stack, useLocalSearchParams } from "expo-router";
import LoadingAnimation from "../components/loading-animation";

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
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          zIndex: -1,
        }}
      >
        <LoadingAnimation />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
