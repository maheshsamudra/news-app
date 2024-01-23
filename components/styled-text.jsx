import React from "react";
import { StyleSheet, Text, View } from "react-native";
import fonts from "../constants/fonts";

const SearchBox = ({
  children,
  variant = "normal",
  muted = false,
  style = {},
}) => {
  return (
    <Text
      style={[{ opacity: muted ? 0.5 : 1 }, styles?.variants?.[variant], style]}
    >
      {children}
    </Text>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  variants: {
    normal: {
      fontSize: 16,
      fontFamily: fonts.normal,
    },
    title: {
      fontSize: 16,
      fontFamily: fonts.medium,
    },
  },
});
