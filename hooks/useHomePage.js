import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import newsApi from "../services/newsApi";

const useHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);

      newsApi("everything")
        .then((r) => {
          console.log(r);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []),
  );

  return { data, isLoading };
};

export default useHomePage;
