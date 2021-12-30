import Layout from "../../components/layout";

export default function Media() {
  const metaData = {
    title: "Media Page",
    description: "Media Description",
    image:
      "https://sixides-assets.s3-ap-southeast-1.amazonaws.com/images/TestImage.jpg",
    url: "http://18.142.102.108:8085/sixidesWeb/#/stories",
  };
  return (
    <Layout {...metaData}>
      <p>Media Page works</p>
    </Layout>
  );
}
