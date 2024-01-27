import React from "react";
import { StyleSheet, Text, View } from "react-native";
import fonts from "../constants/fonts";

const StyledText = ({
  children,
  variant = "normal",
  muted = false,
  style = {},
  ellipsis = false,
  ...props
}) => {
  return (
    <Text
      style={[
        { opacity: muted ? 0.5 : 1 },
        styles?.variants?.[variant],
        ellipsis ? styles.ellipsis : {},
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default StyledText;

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
    newsMeta: {
      fontSize: 12,
      fontFamily: fonts.medium,
    },
    ellipsis: {
      overflow: "hidden",
      width: "100%",
      backgroundColor: "pink",
    },
  },
});
