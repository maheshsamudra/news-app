import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkIfSaved = async (url, callback = () => null) => {
  const value = await AsyncStorage.getItem("saved");
  let existingFavourites = value ? JSON.parse(value) : [];

  const alreadyExists = !!existingFavourites.find((a) => a.url === url);

  callback(alreadyExists);

  return alreadyExists;
};

export const toggleFavourite = async (article, callback = () => null) => {
  if (!article.url) return;
  const value = await AsyncStorage.getItem("saved");
  let existingFavourites = value ? JSON.parse(value) : [];

  const alreadyExists = existingFavourites.find((a) => a.url === article.url);

  if (alreadyExists) {
    existingFavourites = existingFavourites.filter(
      (a) => a.url !== article.url,
    );
    callback(false);
  } else {
    existingFavourites.push(article);
    callback(true);
  }

  await AsyncStorage.setItem("saved", JSON.stringify(existingFavourites));
};
