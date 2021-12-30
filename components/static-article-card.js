export default function StaticArticleCard({ article = {} }) {
  return (
    <div className="article-card col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <div className="title-image-wrapper" style={{ border: "none" }}>
        <img src={article?.titleImagePath} height="233" width="100%" />
      </div>

      <div className="article-title">{article?.title}</div>
      <p style={{ textAlign: "center" }}>{article?.shortDesc}</p>
    </div>
  );
}
