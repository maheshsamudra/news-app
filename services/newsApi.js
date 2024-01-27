import axios from "axios";

const baseUrl = "https://newsapi.org/v2";
const apiKey = "860d97fb6ad441d685f81253de91a03b";

const newsApi = async (endpoint = "", options = {}) => {
  return await axios
    .get(createUrl(endpoint, options))
    .then(function (r) {
      return r.data;
    })
    .catch(function (error) {
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
    category = "",
  } = options;

  let url = baseUrl + "/" + endpoint + "?";

  if (searchQuery) {
    url += `q=${searchQuery}&`;
  }
  if (page) url += `page=${page}&`;
  if (pageSize) url += `pageSize=${pageSize}&`;
  if (language) url += `language=${language}&`;
  if (category) url += `category=${category}&`;

  url += `apiKey=${apiKey}`;

  return url;
};
