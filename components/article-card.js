import { useRouter } from "next/router";

export default function ArticleCard({ article = {} }) {
  const history = useRouter();

  return (
    <div
      className="article-card col-xs-12 col-sm-12 col-md-4 col-lg-4"
      onClick={() =>
        history.push({
          pathname: `/articles/${article.urlTitle}`,
          state: article,
        })
      }
    >
      <div className="title-image-wrapper">
        <img src={article?.titleImagePath} height="233" width="100%" />
      </div>

      <div className="article-title">{article?.title}</div>
      <p>{article?.shortDesc}</p>
    </div>
  );
}
