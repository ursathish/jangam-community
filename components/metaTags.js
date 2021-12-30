import Head from "next/head";

export default function MetaTags({
  title = "Jangam Community",
  description = "Jangam Community description",
  image = "https://sixides-assets.s3-ap-southeast-1.amazonaws.com/images/logo200.png",
  url = "",
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} key="ogurl" />
        <meta
          property="og:image"
          itemProp="image"
          content={image}
          key="ogimage"
        />
        <meta
          property="og:image:secure_url"
          content={image}
          key="ogsecureurl"
        />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
    </>
  );
}
