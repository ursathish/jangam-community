import { useRouter } from "next/dist/client/router";
import { useEffect, useState, useCallback } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import MediaCard from "../../components/media-card";
import StoriesArticles from "../../components/stories/story-articles";
import StoriesFeatureDetails from "../../components/stories/story-featured";
import { storiesMenuDetailsSelector } from "../../redux/selectors/app.selector";
import MediaService from "../api/services/media.service";

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

export default function Stories() {
  const [categoryByStories, setCategoryByStories] = useState({});
  const storiesMenuList = useSelector(storiesMenuDetailsSelector);

  const history = useRouter();

  useEffect(() => {
    getStoriesTop3();
  }, []);

  const getStoriesTop3 = useCallback(async () => {
    try {
      const response = await MediaService.getStoriesTop3({});
      if (response.status === 200) {
        response.data.forEach((element) => {
          element.previewImg = element.previewImg
            ? element.previewImg
            : `//img.youtube.com/vi/${element.link}/mqdefault.jpg`;
        });

        var categoryDetails = response.data.reduce(function (rv, x) {
          (rv[x["menuId"]] = rv[x["menuId"]] || []).push(x);
          return rv;
        }, {});

        console.log(categoryDetails);
        setCategoryByStories(categoryDetails);
      }
    } catch (err) {}
  }, []);

  return (
    <div className="">
      <div className="title-text" style={{ height: 30 }}></div>
      <div className="featured-common-style bgColor ">
        <StoriesFeatureDetails />
      </div>

      <div className="common-style "><StoriesArticles /></div>

      {Object.keys(categoryByStories).length > 0 && (
        <div>
          {Object.keys(categoryByStories).map((stories, index) => (
            <div
             key={index}
              className={
                index % 2 === 0 ? "common-style bgColor" : "common-style "
              }
            >
              <div className="container">
                <div className="">
                  <h1 className="home-title">
                    {
                      storiesMenuList.filter(
                        (ele) => ele.menuId === +stories
                      )[0]?.menuName
                    }
                  </h1>
                </div>
                <div className="d-none d-sm-none d-md-block">
                  <div className="article-section">
                    {categoryByStories[stories]?.length > 0 && (
                      <div className="row">
                        {categoryByStories[stories]?.map((story, index) => (
                          <MediaCard media={story} key={index} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="d-block d-md-none">
                  <div className="article-section">
                    <Carousel
                      responsive={responsive}
                      infinite={false}
                      autoPlay={false}
                      autoPlaySpeed={1500}
                      arrows={false}
                      showDots={true}
                      key={index}
                    >
                      {categoryByStories[stories]?.map((story, index) => (
                        <div style={{ padding: "0 20px" }} key={index}>
                          <MediaCard media={story} key={index} />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div
                  style={{ marginTop: 30 }}
                  className="d-flex align-items justify-center"
                >
                  <div
                    className="btn-style"
                    onClick={() =>
                      history.push({
                        pathname: `/stories/${+stories}`,
                        state: storiesMenuList.filter(
                          (ele) => ele.menuId === +stories
                        )[0],
                      })
                    }
                  >
                    View More
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
