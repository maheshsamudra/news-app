import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import newsApi from "../services/newsApi";

const useHomePage = (searchQuery = "test") => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
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
    }, [searchQuery]),
  );

  return { data, isLoading };
};

export default useHomePage;
