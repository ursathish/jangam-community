import { Button } from "antd";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import YouTubeIcon from "./youtubeIcon";

export default function MediaFeatureDetails({ featuredDetails = {} }) {
  const history = useRouter();
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
              onClick={() =>
                history.push({
                  pathname: `/media/${featuredDetails?.urlTitle}`,
                })
              }
              className="btn-style"
              style={{ marginBottom: 30 }}
            >
              Learn More
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <div className="title-image-wrapper">
            <img
              onClick={() =>
                history.push({
                  pathname: `/media/${featuredDetails?.urlTitle}`,
                })
              }
              src={featuredDetails?.previewImg}
              width="100%"
            />
            <YouTubeIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
