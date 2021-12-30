import { useRouter } from "next/router";
import Footer from "./footer";
import MetaTags from "./metaTags";
import NavBar from "./navbar";
import { FaRegCopyright } from "react-icons/fa";
import { Divider } from "antd";
export default function Layout({ children }) {
  const history = useRouter()
  return (
    <>
      <MetaTags />
      <NavBar />
      <div className="render-section">{children}</div>
      <div className="footer-section">
        <Footer />
      </div>
      <div className="terms-conditions-sec">
        <div>
          <a onClick={()=>history.push("/tc")}>Privacy Policy</a>

          <Divider style={{ borderColor: "#fff" }} type="vertical" />
          <a onClick={()=>history.push("/tc")}>Terms & Conditions</a>
        </div>
        <span>
          Copyright <FaRegCopyright /> {new Date().getFullYear()} Jangam community. All rights reserved.
        </span>
      </div>
    </>
  );
}
