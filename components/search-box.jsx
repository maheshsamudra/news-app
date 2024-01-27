import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import StyledButton from "./styled-button";
import fonts from "../constants/fonts";

const SearchBox = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    search("");
    setTimeout(() => search(searchValue), 5);
  };
  return (
    <View style={styles.outerWrapper}>
      <View style={styles.wrapper}>
        <AntDesign
          name="search1"
          size={24}
          color={"#999"}
          style={styles.icon}
        />
        <TextInput
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          enterKeyHint={"search"}
          returnKeyType={"search"}
          style={styles.text}
          onSubmitEditing={handleSearch}
          placeholder={"Type here to search"}
        />
        <StyledButton title={"Search"} onPress={handleSearch} />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  outerWrapper: { margin: 20 },
  icon: { marginLeft: 4 },
  wrapper: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    backgroundColor: "white",
    padding: 4,
  },
  text: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
    flex: 1,
  },
});
