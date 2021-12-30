import axios from "axios";
import MetaTags from "../../components/metaTags";
import { Tag } from "antd";
import ArticleService from "../api/services/article.service";
import OtherArticles from "../../components/other-articles";
import config from "../../environment";

export default function Article({ article }) {
  const metaData = {
    title: article.title,
    description: article.shortDesc,
    image: article.titleImagePath,
    url: `${config.APP_URL}/articles/${article.urlTitle}`,
  };

  return (
    <>
      <MetaTags {...metaData} />
      <div className="article-container">
        {Object.keys(article).length > 0 && (
          <>
            <div className="container">
              <img
                className="article-thumb-image"
                width="100%"
                src={article?.titleImagePath}
              />

              <div className="article-render-area">
                <h1
                  className="home-title"
                  style={{
                    paddingTop: 47,
                    textAlign: "left",
                    paddingBottom: 27,
                  }}
                >
                  {article?.title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: article["content"] }}
                ></div>

                <h3 style={{ marginTop: 50 }}>Related Tags</h3>
                <div>
                  {article["tags"].split(",").length > 0 && (
                    <>
                      {article["tags"].split(",").map((tag, index) => (
                        <Tag color="processing" key={index}>
                          {tag}
                        </Tag>
                      ))}
                    </>
                  )}
                </div>
              </div>

              <div className="other-article-section">
                <OtherArticles currentArticle={article} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export const getServerSideProps = async (context) => {
  const response = await ArticleService.getArticle({
    urlTitle: context.params.urlTitle,
  });
  // const res = await axios.post(
  //   "http://18.142.102.108:8090/adminservice/public/articles/get",
  //   { urlTitle: context.params.urlTitle }
  // );

  return {
    props: {
      article: response.data,
    },
  };
};
