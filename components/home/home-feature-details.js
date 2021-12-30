import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import MediaService from "../../pages/api/services/media.service";

export default function FeatureDetails() {
  const [featuredDetails, setFeaturedDetails] = useState({});
  const history = useRouter();

  useEffect(() => {
    getArticleFeatured();
  }, []);

  const getArticleFeatured = useCallback(async () => {
    try {
      const response = await MediaService.getMainFeatured();
      if (response.status === 200) {
        setFeaturedDetails(response.data);
      }
    } catch (error) {}
  }, []);

  return (
    <div className="feature-details container">
      <div className="row flex-column-reverse flex-md-row">
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <div className="feature-details-left-wrapper">
            <h3>FEATURED</h3>
            <h1>{featuredDetails?.title}</h1>

            <p
              dangerouslySetInnerHTML={{ __html: featuredDetails["longDesc"] }}
            ></p>
            <div
              className="btn-style"
              onClick={() =>
                history.push({
                  pathname: `/articles/${featuredDetails?.urlTitle}`,
                  state: featuredDetails,
                })
              }
              style={{ marginBottom: 30 }}
            >
              Learn More
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <div className="title-image-wrapper">
            <img width="100%" src={featuredDetails?.titleImagePath} />
          </div>
        </div>
      </div>
    </div>
  );
}
