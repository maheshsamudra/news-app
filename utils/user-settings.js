import AsyncStorage from "@react-native-async-storage/async-storage";

export const getActiveCategory = async () => {
  const value = await AsyncStorage.getItem("categories");
  return value ? JSON.parse(value) : "";
};

export const checkIfCategoryExists = async (url, callback = () => null) => {
  let existingFavourites = await getActiveCategory();

  const alreadyExists = !!existingFavourites.find((a) => a.url === url);

  callback(alreadyExists);

  return alreadyExists;
};

export const toggleCategories = async (category, callback = () => null) => {
  let existing = await getActiveCategory();

  if (existing === category) {
    existing = "";
    callback(false);
  } else {
    existing = category;
    callback(true);
  }

  await AsyncStorage.setItem("categories", JSON.stringify(existing));
};
