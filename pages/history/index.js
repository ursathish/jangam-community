import { useCallback, useEffect, useState } from "react";
import ArticleCard from "../../components/article-card";
import ArticleFeatureDetails from "../../components/featured-articles";
import HistoryCard from "../../components/history-card";
import ArticleService from "../api/services/article.service";

export default function History() {
  const [articlesList, setArticleList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryByArticles, setCategoryByArticles] = useState({});

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = useCallback(async () => {
    try {
      const response = await ArticleService.getHistories({ page: 0, size: 100 });
      if (response.status === 200) {
        // response.data["articles"].forEach((element, index) => {
        //   element.category = element.articleSubCategory.subCategoryName;
        // });
        setArticleList(response.data["History"]);

        // var categoryDetails = response.data["articles"].reduce(function (
        //   rv,
        //   x
        // ) {
        //   (rv[x["category"]] = rv[x["category"]] || []).push(x);
        //   return rv;
        // },
        // {});

        // console.log(categoryDetails);

        // setCategoryByArticles(categoryDetails);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="article-container">
      <div className="title-text">History</div>

      {/* <div className="featured-common-style bgColor ">
        <ArticleFeatureDetails />
      </div> */}

      <div className="container">
        <div className="article-section article-list-section">
          {articlesList?.length > 0 && (
            <div className="row">
              {articlesList?.map((article, index) => (
                <HistoryCard article={article} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* {Object.keys(categoryByArticles).length > 0 && (
        <div>
          {Object.keys(categoryByArticles).map((articles, index) => (
            <div
              key={index}
              className={
                index % 2 === 0 ? "common-style" : "common-style bgColor"
              }
            >
              
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
