import MediaService from "../api/services/media.service";
import MediaCard from "../../components/media-card";
import MediaFeatureDetails from "../../components/media-featured";
import { storiesMenuDetailsSelector } from "../../redux/selectors/app.selector";
import { useSelector } from "react-redux";

export default function StoriesSub({
  dataSource = [],
  featureDetails = {},
  menuId,
}) {
  const storiesMenuList = useSelector(storiesMenuDetailsSelector);

  return (
    <div className="article-container ">
      <div className="title-text">{storiesMenuList.filter((ele) => ele.menuId === +menuId)[0]?.menuName}</div>
      <div className="featured-common-style bgColor ">
        <MediaFeatureDetails featuredDetails={featureDetails} />
      </div>

      <div className="article-section container media-section">
        {dataSource.length > 0 && (
          <div className="row">
            {dataSource.map((media, index) => (
              <MediaCard media={media} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const response = await MediaService.getMedias({
    page: 0,
    size: 100,
    menuId: context.params.menuId,
    status: "Y",
  });
  if (response.status === 200) {
    response.data["medias"].forEach((element) => {
      element.previewImg = element.previewImg
        ? element.previewImg
        : `//img.youtube.com/vi/${element.link}/mqdefault.jpg`;
    });
    var featured = response.data["medias"].filter(
      (ele) => ele.featured === true
    )[0];
  }

  return {
    props: {
      dataSource: response.data["medias"],
      featureDetails: featured,
      menuId: context.params.menuId,
    },
  };
};
