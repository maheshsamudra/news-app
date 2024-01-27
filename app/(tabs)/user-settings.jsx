import { StyleSheet, Switch, View } from "react-native";
import StyledText from "../../components/styled-text";
import { useCallback, useEffect, useState } from "react";
import colors from "../../constants/colors";
import { getCategories, toggleCategories } from "../../utils/user-settings";
import { useFocusEffect } from "expo-router";

export default function UserSettings() {
  const [existingCategories, setExistingCategories] = useState([]);

  const getSaved = async () => {
    getCategories()
      .then((res) => {
        setExistingCategories(res);
      })
      .finally(() => {});
  };

  useFocusEffect(
    useCallback(() => {
      getSaved().then(() => null);
    }, []),
  );

  return (
    <View>
      <StyledText variant={"title"} style={{ margin: 20 }}>
        Your home page will show the categories selected here.
      </StyledText>
      {categories.map((category) => (
        <Category
          category={category}
          key={category.value}
          getSaved={getSaved}
          existingCategories={existingCategories}
        />
      ))}
    </View>
  );
}

const Category = ({ category, getSaved, existingCategories }) => {
  const { label, value } = category || {};

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = async () => {
    // toggle the save
    await toggleCategories(value);
    await getSaved();
    setIsEnabled((previousState) => !previousState);
  };

  useEffect(() => {
    setIsEnabled(() => !!existingCategories.find((c) => c === value));
  }, [existingCategories?.length]);

  return (
    <View style={styles.category}>
      <Switch
        trackColor={{ false: "#dddddd", true: "#dddddd" }}
        thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      <StyledText variant={"title"}>{label}</StyledText>
    </View>
  );
};

const categories = [
  { label: "Business", value: "business" },
  { label: "Entertainment", value: "entertainment" },
  { label: "General", value: "general" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
  { label: "Sports", value: "sports" },
  { label: "Technology", value: "technology" },
];

const styles = StyleSheet.create({
  category: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  switch: {
    marginRight: 10,
  },
});
