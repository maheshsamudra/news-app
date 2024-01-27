import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingAnimation = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingAnimation;

const styles = StyleSheet.create({
  wrapper: { marginTop: 20 },
});
