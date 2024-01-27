import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import StyledButton from "./styled-button";

const SearchBox = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    search("");
    setTimeout(() => search(searchValue), 5);
  };
  return (
    <View style={{ margin: 20 }}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          width: "100%",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#999",
          borderRadius: 6,
          backgroundColor: "white",
          padding: 4,
        }}
      >
        <AntDesign
          name="search1"
          size={24}
          color={"#999"}
          style={{ marginLeft: 4 }}
        />
        <TextInput
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          enterKeyHint={"search"}
          returnKeyType={"search"}
          style={{
            paddingVertical: 8,
            paddingHorizontal: 10,
            backgroundColor: "white",
            flex: 1,
          }}
          onSubmitEditing={handleSearch}
        />
        <StyledButton title={"Search"} onPress={handleSearch} />
      </View>
    </View>
  );
};

export default SearchBox;
