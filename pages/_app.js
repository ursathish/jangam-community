import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import Layout from "../components/layout";
import "../styles/customFont.css";
import "../styles/globals.css";
import { store } from "../redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
