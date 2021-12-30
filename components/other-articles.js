import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import ArticleService from "../pages/api/services/article.service";
import ArticleCard from "./article-card";

export default function OtherArticles({ currentArticle = {} }) {
  const history = useRouter();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getArticles();
  }, [currentArticle]);

  const getArticles = useCallback(async () => {
    try {
      const response = await ArticleService.getArticle({
        page: 0,
        size: 100,
        tags: currentArticle["tags"],
      });
      if (response.status === 200) {
        const filteredData = response.data["Articles"].filter(
          (ele) => ele.urlTitle !== currentArticle?.urlTitle
        );
        console.log(filteredData)
        setDataSource(filteredData);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <div className="article-section">
        {dataSource.length > 0 && (
          <>
            <div className="d-flex align-items justify-space-between">
              <h1 className="home-title" style={{ marginBottom: 20 }}>
                More Articles
              </h1>
            </div>
            <div className="row">
              {dataSource.slice(0, 3).map((article, index) => (
                <ArticleCard article={article} key={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
