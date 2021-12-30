import { Divider, Tag } from "antd";
import MetaTags from "../../components/metaTags";
import OtherMedia from "../../components/other-media";
import MediaService from "../api/services/media.service";
import config from "../../environment";


export default function MediaView({ viewDetails = {} }) {
  const metaData = {
    title: viewDetails.title,
    description: viewDetails.shortDesc,
    image: viewDetails.previewImg,
    url: `${config.APP_URL}/media/${viewDetails.urlTitle}`,
  };

  return (
    <>
      <MetaTags {...metaData} />
      <div className="article-container">
        {Object.keys(viewDetails).length > 0 && (
          <div className="container">
            <iframe
              className="media-frame"
              width="100%"
              src={`https://www.youtube.com/embed/${viewDetails?.link}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="row media-render-area" style={{ marginTop: 10 }}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h1 className="home-title" style={{ textAlign: "left" }}>
                  {viewDetails?.title}
                </h1>
                <p
                  dangerouslySetInnerHTML={{ __html: viewDetails["longDesc"] }}
                ></p>

                <Divider type="vertical" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                {Object.keys(viewDetails).length > 0 && (
                  <>
                    <div>
                      {viewDetails["tags"].split(",").length > 0 && (
                        <>
                          {viewDetails["tags"].split(",").map((tag, index) => (
                            <Tag color="processing" key={index}>
                              {tag}
                            </Tag>
                          ))}
                        </>
                      )}
                    </div>
                    <OtherMedia currentMedia={viewDetails} />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const response = await MediaService.getMedia({
    urlTitle: context.params.urlTitle,
  });

  return {
    props: {
      viewDetails: response.data,
    },
  };
};
