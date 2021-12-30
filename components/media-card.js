import { useRouter } from "next/router";
import React from "react";
import YouTubeIcon from "./youtubeIcon";

export default function MediaCard({ media = {} }) {
  const history = useRouter();

  return (
    <div
      className="article-card col-xs-12 col-sm-12 col-md-4 col-lg-4"
      onClick={() =>
        history.push({
          pathname: `/media/${media.urlTitle}`,
          state: media,
        })
      }
    >
      <div className="title-image-wrapper">
        <img src={media?.previewImg} height="233" width="100%" />
        <YouTubeIcon />
      </div>
      <div className="article-title">{media?.title}</div>
      <p>{media?.shortDesc}</p>
    </div>
  );
}
