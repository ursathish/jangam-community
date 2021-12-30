import { useCallback, useEffect, useState } from "react";
import ArticleCard from "../../components/article-card";
import ArticleFeatureDetails from "../../components/featured-articles";
import ArticleService from "../api/services/article.service";

export default function Articles() {
  const [articlesList, setArticleList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryByArticles, setCategoryByArticles] = useState({});

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = useCallback(async () => {
    try {
      const response = await ArticleService.getArticles({ page: 0, size: 100 });
      if (response.status === 200) {
        response.data["articles"].forEach((element, index) => {
          element.category = element.articleSubCategory.subCategoryName;
        });
        setArticleList(response.data["articles"]);

        var categoryDetails = response.data["articles"].reduce(function (
          rv,
          x
        ) {
          (rv[x["category"]] = rv[x["category"]] || []).push(x);
          return rv;
        },
        {});

        console.log(categoryDetails);

        setCategoryByArticles(categoryDetails);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="article-container">
      <div className="title-text">Articles</div>

      <div className="featured-common-style bgColor ">
        <ArticleFeatureDetails />
      </div>

      {Object.keys(categoryByArticles).length > 0 && (
        <div>
          {Object.keys(categoryByArticles).map((articles, index) => (
            <div
              key={index}
              className={
                index % 2 === 0 ? "common-style" : "common-style bgColor"
              }
            >
              <div className="container">
                <h1 className="home-title">{articles}</h1>
                <div className="article-section article-list-section">
                  {categoryByArticles[articles]?.length > 0 && (
                    <div className="row">
                      {categoryByArticles[articles]?.map((article, index) => (
                        <ArticleCard article={article} key={index} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
