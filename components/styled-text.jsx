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
    return <View style={styles.badge}>{children}</View>;
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
      color: colors.purple,
      paddingVertical: 2,
      paddingHorizontal: 6,
      borderRadius: 6,
    },
  },
  center: { textAlign: "center" },
  badge: {
    borderRadius: 4,
    backgroundColor: colors.yellow,
    overflow: "hidden",
  },
});
