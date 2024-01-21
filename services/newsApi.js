import { useEffect } from "react";
import axios from "axios";
import { useFocusEffect } from "expo-router";

const baseUrl = "https://newsapi.org/v2/everything?&apiKey=";
const apiKey = "860d97fb6ad441d685f81253de91a03b";

const newsApi = async (endpoint = "", searchQuery = "") => {
  return await axios
    .get(createUrl(endpoint, searchQuery))
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

const createUrl = (endpoint, searchQuery) => {
  let url = baseUrl + "/" + endpoint + "?";

  if (searchQuery) {
    url += `q=${searchQuery}&`;
  }

  url += `apiKey=${apiKey}`;

  return url;
};
