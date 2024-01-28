import { useState, useEffect } from "react";
import newsApi from "../services/newsApi";
import { getActiveCategory } from "../utils/user-settings";

const useHomePage = (refresh = "") => {
  const [isLoading, setIsLoading] = useState(true);
  const [inactive, setInactive] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getActiveCategory().then((res) => {
      const category = res;

      if (res?.length === 0) {
        setInactive(true);
        return;
      }
      setInactive(false);

      // fetch sources

      newsApi("top-headlines", { category })
        .then((r) => {
          setData(r.articles);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });

      // fetch categories
    });
  }, [refresh]);

  return { data, isLoading, inactive };
};

export default useHomePage;
