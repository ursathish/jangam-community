import StaticArticleCard from "../static-article-card";

const dataSource = [
  {
    shortDesc:
      "Explore verified interior designers and vendors for your home. Learn more and get inspirations from our platform!",
    titleImagePath: "/images/Icon_1-01.jpg",
    title: "",
  },
  {
    shortDesc:
      "Like what you see? Let us match you with interior designers based on your renovation needs!",
    titleImagePath: "/images/Icon_2-01.jpg",
    title: "",
  },
  {
    shortDesc:
      "Track your renovation progress together with your designer through us! Receive scheduled updates and even special promotions!",
    titleImagePath: "/images/Icon_3-01.jpg",
    title: "",
  },
];

export default function StaticArticleBanner() {
  return (
    <div className="container">
      <div className="article-section static-article-banner">
        {dataSource.length > 0 && (
          <div className="row">
            {dataSource.map((article, index) => (
              <StaticArticleCard article={article} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
