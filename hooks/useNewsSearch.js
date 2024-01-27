import { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "expo-router";
import newsApi from "../services/newsApi";

const useNewsSearch = (searchQuery = "") => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true);

    newsApi("everything", { searchQuery })
      .then((r) => {
        setData(r.articles);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  return { data, isLoading };
};

export default useNewsSearch;
