import StaticArticleCard from "../static-article-card";

const dataSource = [
  {
    shortDesc:
      "ஜங்கம் உறவுகள் அனைவருக்கும் ஆங்கிலப் புத்தாண்டு வாழ்த்துக்கள்",
    titleImagePath: "/images/Icon_1-01.jpeg",
    title: "",
  },
  {
    shortDesc:
      "ஜங்கம் கல்வி சேவை மையம் -ஆத்தூர்",
    titleImagePath: "/images/Icon_2-01.jpeg",
    title: "",
  },
  {
    shortDesc:
      "காலண்டர் வெளியிட்டு விழா",
    titleImagePath: "/images/Icon_3-01.jpeg",
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
