import { useEffect } from "react";
import axios from "axios";
import { useFocusEffect } from "expo-router";

const baseUrl = "https://newsapi.org/v2";
const apiKey = "860d97fb6ad441d685f81253de91a03b";

const newsApi = async (endpoint = "", options = {}) => {
  return await axios
    .get(createUrl(endpoint, options))
    .then(function (r) {
      // handle success
      return r.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return null;
    });
};

export default newsApi;

const createUrl = (endpoint, options) => {
  const {
    searchQuery = "",
    page = 1,
    pageSize = 50,
    language = "en",
  } = options;

  let url = baseUrl + "/" + endpoint + "?";

  if (searchQuery) {
    url += `q=${searchQuery}&`;
  }
  if (page) url += `page=${page}&`;
  if (pageSize) url += `pageSize=${pageSize}&`;
  if (language) url += `language=${language}&`;

  url += `apiKey=${apiKey}`;

  console.log(url);

  return url;
};
