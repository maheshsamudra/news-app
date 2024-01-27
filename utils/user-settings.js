import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCategories = async () => {
  const value = await AsyncStorage.getItem("categories");
  return value ? JSON.parse(value) : [];
};

export const checkIfCategoryExists = async (url, callback = () => null) => {
  const value = await AsyncStorage.getItem("categories");
  let existingFavourites = value ? JSON.parse(value) : [];

  const alreadyExists = !!existingFavourites.find((a) => a.url === url);

  callback(alreadyExists);

  return alreadyExists;
};

export const toggleCategories = async (category, callback = () => null) => {
  let existing = await getCategories();

  const alreadyExists = existing.find((cat) => cat === category);

  if (alreadyExists) {
    existing = existing.filter((cat) => cat === category);
    callback(false);
  } else {
    existing.push(category);
    callback(true);
  }

  await AsyncStorage.setItem("categories", JSON.stringify(existing));
};
