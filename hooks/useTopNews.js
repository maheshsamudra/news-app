import { useState, useEffect } from "react";
import newsApi from "../services/newsApi";

const useTopNews = (refresh) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
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
  }, [refresh]);

  return { data, isLoading };
};

export default useTopNews;
