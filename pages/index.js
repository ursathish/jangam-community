
import BannerGallery from "../components/home/bannerGallary";
import FeatureDetails from "../components/home/home-feature-details";
import LatestArticles from "../components/home/latest-articles";
import LatestStories from "../components/home/latest-stories";
import StaticArticleBanner from "../components/home/static-article-banner";

export default function Home() {
  return (
    <>
      <div className="gallery-container">
        <BannerGallery />
      </div>
      <div className="common-style">
        <StaticArticleBanner />
      </div>
      {/* <div className="featured-common-style bgColor ">
        <FeatureDetails />
      </div> */}
      {/* <div className="common-style ">
        <LatestStories />
      </div> */}
      <div className="common-style bgColor ">
        <LatestArticles />
      </div>
      <div className="common-style ">
        <LatestStories />
      </div>
    </>
  );
}
