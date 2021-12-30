import { useRouter } from "next/router";
import { useState,useEffect,useCallback } from "react";
import MediaService from "../pages/api/services/media.service";
import YouTubeIcon from "./youtubeIcon";

export default function OtherMedia({ currentMedia = {} }) {
  const [dataSource, setDataSource] = useState([]);
  const history = useRouter();

  useEffect(() => {
    getMedias();
  }, [currentMedia]);

  const getMedias = useCallback(async () => {
    try {
      const response = await MediaService.getMedias({
        page: 0,
        size: 100,
        tags: currentMedia["tags"],
      });
      if (response.status === 200) {
        response.data["medias"].forEach((element) => {
          element.previewImg = element.previewImg
            ? element.previewImg
            : `//img.youtube.com/vi/${element.link}/mqdefault.jpg`;
        });

        const filteredData = response.data["medias"].filter(
          (ele) => ele.mediaId !== currentMedia?.mediaId
        );

        // console.log(filteredData)
        setDataSource(filteredData);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      {dataSource.length > 0 && (
        <div className="other-media-section">
          <h3 style={{ margin: "10px 0" }}>Watch Next</h3>
          {dataSource.slice(0, 3).map((item, index) => (
            <div className="row other-media-card" key={index}>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 ">
                <p>{item.shortDesc}</p>
              </div>
              <div
                className="col-xs-12 col-sm-12 col-md-5 col-lg-5 "
                onClick={() =>
                  history.push({
                    pathname: `/media/${item.urlTitle}`,
                  })
                }
              >
                <div style={{ position: "relative" }}>
                  <img src={item.previewImg} />
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
