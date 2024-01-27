import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import newsApi from "../services/newsApi";

const useHomePage = (refresh) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setData([]);

      setIsLoading(true);

      newsApi("top-headlines")
        .then((r) => {
          setData(r.articles);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [refresh]),
  );

  return { data, isLoading };
};

export default useHomePage;
