import React from "react";
import { Pressable, View } from "react-native";
import StyledText from "./styled-text";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

const StyledButton = ({ title = "Submit" }) => {
  return (
    <Pressable
      style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 4,
      }}
    >
      <StyledText
        style={{ color: "white", fontFamily: fonts.medium, fontSize: 16 }}
      >
        {title}
      </StyledText>
    </Pressable>
  );
};

export default StyledButton;
