import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import newsApi from "../services/newsApi";
import { getCategories } from "../utils/user-settings";

const useHomePage = (searchQuery = "") => {
  const [isLoading, setIsLoading] = useState(true);
  const [inactive, setInactive] = useState(false);
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getCategories().then((res) => {
        console.log(res);

        if (res?.length === 0) {
          setInactive(true);
          return;
        }

        // fetch sources

        // fetch categories
      });

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

  return { data, isLoading, inactive };
};

export default useHomePage;
