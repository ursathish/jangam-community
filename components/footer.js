import React, { useCallback, useState } from "react";
import { Input, notification } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import CommonService from "../pages/api/services/common.service";
import { useSelector } from "react-redux";
import { storiesMenuDetailsSelector } from "../redux/selectors/app.selector";

export default function Footer() {
  const storiesMenuList = useSelector(storiesMenuDetailsSelector);
  const history = useRouter();
  const [value, setValue] = useState("");

  const handleStoriesMenuClick = useCallback((option) => {
    if (option.menuType === "ARTICLE") {
      history.push("/articles");
      return;
    }

    if (option.menuType === "MEDIA") {
      history.push({
        pathname: `/stories/${option.menuId}`,
        state: option,
      });
      return;
    }
  }, []);

  const onSubscribe = useCallback(async (value) => {
    try {
      if (value.length === 0) {
        return;
      }
      const response = await CommonService.postSubscribe({ email: value });
      if (response.status === 200) {
        notification.open({
          message: "Your are now subscribed. Thank you!",
          description:
            "thank you Your subscription has been successfully confirmed ",
        });
        setValue("");
      }
    } catch (err) {}
  }, []);

  return (
    <div className="footer-wrapper-section">
      {/* <div className="img-section">
        <img
          onClick={() => {
            history.push("/home");
          }}
          src={"/images/logo.svg"}
          height="56"
          style={{ cursor: "pointer" }}
        />
        <Input.Search
          type="email"
          value={value}
          onChange={(ele) => setValue(ele.target.value)}
          className="footer-search"
          placeholder="Your Email Address"
          enterButton="Subscribe"
          onSearch={onSubscribe}
        />
      </div> */}

      <div className="container footer-container">
        <div className="d-block d-md-none d-lg-none socialIcons">
          <div
            style={{ display: "flex", alignItems: "center", margin: "20px 0" }}
          >
            <h6 style={{ marginRight: 20 }}>Follow</h6>
            <a
              href="https://www.facebook.com/sixidesasia"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"/images/footerIcons/facebookicon.svg"} />
            </a>
            <a
              href="https://www.tiktok.com/@sixidesasia"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"/images/footerIcons/tiktokicon.svg"} />
            </a>
            <a
              href="https://www.instagram.com/sixidesasia/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"/images/footerIcons/instaicon.svg"} />
            </a>
            <a
              href="https://www.linkedin.com/company/sixides"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"/images/footerIcons/linkedinicon.svg"} />
            </a>

            <a
              href="https://www.youtube.com/c/AstleyNgDC/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"/images/footerIcons/youtube-logo.svg"} />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-4 col-sm-6 col-md-3 col-lg-3">
            <h6>Browse</h6>
            <ul>
              <li>
                <Link href="/spaces">Articles</Link>
              </li>
              <li>
                <Link href="/professionals">History</Link>
              </li>
              <li>
                <Link href="/vendors">Events</Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-4 col-sm-6 col-md-3 col-lg-3">
            <h6>Stories</h6>

            <ul>
              {storiesMenuList?.map((option, index) => (
                <li key={index}>
                  <a onClick={() => handleStoriesMenuClick(option)}>
                    {option.menuName}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="col-4 col-sm-6 col-md-3 col-lg-3">
            <h6>Company</h6>
            <ul>
              <li>
                <Link href="/about-us">About</Link>
              </li>
              {/* <li>
                <Link href="/how-it-works">How it works</Link>
              </li> */}
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className=" col-12 col-md-3 col-lg-3">
            <div className="d-none d-sm-none d-md-block socialIcons">
              <h6>Follow</h6>
              <a
                href="https://www.facebook.com/sixidesasia"
                target="_blank"
                rel="noreferrer"
              >
                <img src={"/images/footerIcons/facebookicon.svg"} />
              </a>
              <a
                href="https://www.tiktok.com/@sixidesasia"
                target="_blank"
                rel="noreferrer"
              >
                <img src={"/images/footerIcons/tiktokicon.svg"} />
              </a>
              <a
                href="https://www.instagram.com/sixidesasia/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={"/images/footerIcons/instaicon.svg"} />
              </a>
              <a
                href="https://www.linkedin.com/company/sixides"
                target="_blank"
                rel="noreferrer"
              >
                <img src={"/images/footerIcons/linkedinicon.svg"} />
              </a>

              <a
                href="https://www.youtube.com/c/AstleyNgDC/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={"/images/footerIcons/youtube-logo.svg"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
