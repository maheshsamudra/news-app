import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import StyledText from "./styled-text";

const StyledInput = ({
  value = "",
  setValue = () => null,
  keyboardType = "default",
  label = null,
  style = {},
}) => {
  return (
    <SafeAreaView>
      {label && <StyledText>{label}</StyledText>}
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        keyboardType={keyboardType}
        style={{
          borderWidth: 1,
          borderColor: "#999",
          padding: 6,
          backgroundColor: "white",
          borderRadius: 3,
        }}
      ></TextInput>
    </SafeAreaView>
  );
};

export default StyledInput;
