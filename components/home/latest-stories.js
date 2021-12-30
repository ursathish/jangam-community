import { Button } from "antd";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArticleService from "../../pages/api/services/article.service";
import MediaService from "../../pages/api/services/media.service";
import ArticleCard from "../article-card";
import EventCard from "../event-card";
import MediaCard from "../media-card";



export default function LatestStories() {
  const [mediaList, setMediaList] = useState([]);
  const history = useRouter();

  useEffect(() => {
    getStories();
  }, []);

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

  // const getStories = useCallback(async () => {
  //   try {
  //     // const response = await MediaService.getStories();
  //     // if (response.status === 200) {
  //     //   response.data.forEach((element) => {
  //     //     element.previewImg = element.previewImg
  //     //       ? element.previewImg
  //     //       : `//img.youtube.com/vi/${element.link}/mqdefault.jpg`;
  //     //   });
  //     setMediaList(response.data);
  //     // }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });


  const getStories = useCallback(async () => {
    try {
      const response = await ArticleService.getEvents({ page: 0, size: 100 });
      // const response = await axios.post(
      //   "https://sixides.com/adminservice/public/articles/getAll",
      //   { page: 0, size: 10 }
      // );
      if (response.status === 200) {
        setMediaList(response.data['Events']);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="container">
      <div className="">
        <h1 className="home-title">வரலாறு</h1>
        {/* <div className="btn-style" onClick={() => history.push("/stories")}>
          View More
        </div> */}
      </div>
      <div className="d-none d-sm-none d-md-block">
        <div className="article-section row">
          {mediaList.map((media, index) => (
            <EventCard key={index} article={media} />
          ))}
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
          {mediaList.map((media, index) => (
            <div style={{ padding: "0 20px" }} key={index}>
              <EventCard key={index} article={media} />
            </div>
          ))}
        </Carousel>
      </div>

      <div
        style={{ marginTop: 30 }}
        className="d-flex align-items justify-center"
      >
        <div className="btn-style" onClick={() => history.push("/events")}>
          View More
        </div>
      </div>
    </div>
  );
}
