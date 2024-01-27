import React from "react";
import { StyleSheet, Text, View } from "react-native";
import fonts from "../constants/fonts";
import colors from "../constants/colors";

const StyledText = ({
  children,
  variant = "normal",
  muted = false,
  style = {},
  center = false,
  ellipsis = false,
  ...props
}) => {
  return (
    <Wrapper variant={variant}>
      <Text
        style={[
          { opacity: muted ? 0.5 : 1 },
          styles?.variants?.[variant],
          ellipsis ? styles.ellipsis : {},
          center ? styles.center : {},
          style,
        ]}
        {...props}
      >
        {children}
      </Text>
    </Wrapper>
  );
};

const Wrapper = ({ variant, children }) => {
  if (variant === "badge") {
    return (
      <View
        style={{
          borderRadius: 4,
          backgroundColor: "#ffea97",
          overflow: "hidden",
        }}
      >
        {children}
      </View>
    );
  }
  return children;
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
      fontFamily: fonts.bold,
      opacity: 0.3,
    },
    badge: {
      fontSize: 12,
      fontFamily: fonts.bold,
      color: "#453d81",
      paddingVertical: 2,
      paddingHorizontal: 6,
      borderRadius: 6,
    },
    center: { textAlign: "center" },
    ellipsis: {
      overflow: "hidden",
      width: "100%",
      backgroundColor: "pink",
    },
  },
});
