import { useCallback, useEffect, useState } from "react";
import ArticleCard from "../article-card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";

import axios from "axios";
import ArticleService from "../../pages/api/services/article.service";

// const response =

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 601 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
export default function LatestArticles() {
  const history = useRouter();
  const [articlesList, setArticleList] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = useCallback(async () => {
    try {
      const response = await ArticleService.getArticles({ page: 0, size: 100 });
      // const response = await axios.post(
      //   "https://sixides.com/adminservice/public/articles/getAll",
      //   { page: 0, size: 10 }
      // );
      if (response.status === 200) {
        setArticleList(response.data['Articles']);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="container">
      <div>
        <h1 className="home-title">சமீபத்திய கட்டுரைகள்</h1>
      </div>

      <div className="d-none d-sm-none d-md-block">
        <div className="article-section">
          {articlesList.length > 0 && (
            <div className="row">
              {articlesList.slice(0, 3).map((article, index) => (
                <ArticleCard article={article} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="d-block d-md-none article-section ">
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={1500}
          arrows={false}
          showDots={true}
        >
          {articlesList.slice(0, 3).map((article, index) => (
            <div style={{ padding: "0 20px" }} key={index}>
              <ArticleCard article={article} />
            </div>
          ))}
        </Carousel>
      </div>

      <div
        style={{ marginTop: 30 }}
        className="d-flex align-items justify-center"
      >
        <div className="btn-style" onClick={() => history.push("/articles")}>
          View More
        </div>
      </div>
    </div>
  );
}
