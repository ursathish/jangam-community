import "./navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { Divider, Drawer } from "antd";
import { useCallback, useEffect, useState } from "react";
import CommonService from "../pages/api/services/common.service";
import MobileNavBar from "./navbar-mobile";
import { useDispatch } from "react-redux";
import { setStoriesMenuDetails } from "../redux/actions/app.action";

export default function NavBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [showSubBanner, setShowSubBanner] = useState(false);
  const [storiesMenuList, setStoriesMenuList] = useState([]);
  const [storiesOtherMenuList, setStoriesOtherMenuList] = useState([]);

  useEffect(() => {
    // getStoriesMenuDetails();
  }, []);

  // const getStoriesMenuDetails = useCallback(async () => {
  //   try {
  //     const response = await CommonService.getStoriesMenuDetails();
  //     if (response.status === 200) {
  //       setStoriesMenuList(response.data["menus"]);
  //       dispatch(setStoriesMenuDetails(response.data["menus"]));
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  const handleStoriesMenuClick = useCallback((option) => {
    setVisible(false);
    if (option.menuType === "ARTICLE") {
      router.push("/articles");
      return;
    }

    if (option.menuType === "MEDIA") {
      router.push({
        pathname: `/stories/${option.menuId}`,
        state: option,
      });
      return;
    }
  }, []);

  return (
    <>
      <div className="top-banner-static"></div>
      <div className="top-banner">
        <div style={{ alignItems: "center" }}>
          <AiOutlineMenu
            onClick={() => {
              setVisible(true);
            }}
            className="d-block d-sm-block d-md-block d-lg-none "
            style={{ fontSize: 21 }}
          />
          <img
            onClick={() => {
              router.push("/");
            }}
            src={"/images/logo.jpg"}
            height="43"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block">
          <ul>
            {/* <li id="verified-id">
              <a
                className={
                  router.asPath.includes("vendors") ||
                  router.asPath.includes("professionals")
                    ? "menu-active"
                    : ""
                }
                style={{ padding: "0 15px" }}
              >
                Verified <AiOutlineDown />
              </a>
              <div className="dropdown-content">
                <span onClick={() => router.push("/professionals")}>
                  Professionals
                </span>
                <Divider type="horizontal" />
                <span onClick={() => router.push("/vendors")}> Vendors </span>
              </div>
            </li> */}
            <li>
              <a
                className={router.asPath === "/events" ? "menu-active" : ""}
                onClick={() => router.push("/events")}
              >
                நிகழ்வுகள்
              </a>
            </li>
            <li>
              <a
                className={
                  router.asPath.includes("articles") ? "menu-active" : ""
                }
                onClick={() => {
                  router.push("/articles");
                }}
              >
                கட்டுரைகள்
              </a>
            </li>

            <li>
              <a
                className={
                  router.asPath.includes("history") ? "menu-active" : ""
                }
                onClick={() => {
                  router.push("/history");
                }}
              >
                வரலாறு
              </a>
            </li>


            <li>
              <a
                className={router.asPath === "/about-us" ? "menu-active" : ""}
                onClick={() => router.push("/about-us")}
              >
                எங்களை பற்றி
              </a>
            </li>

            <li>
              <a
                className={router.asPath === "/contact-us" ? "menu-active" : ""}
                onClick={() => router.push("/contact-us")}
              >
                தொடர்பு கொள்ள
              </a>
            </li>
            {/* <li >
              <a
                className={
                 
                  router.asPath === "/contact-us"
                    ? "menu-active"
                    : ""
                }
              >
                Contact Us
              </a> */}

              {/* <div className="dropdown-content">
                <span onClick={() => router.push("/how-it-works")}>
                  How it works?
                </span>
                <Divider type="horizontal" />
                <span onClick={() => router.push("/contact-us")}>
                  Contact us
                </span>
              </div> */}
            {/* </li> */}
          </ul>
        </div>

        <div className="d-none d-sm-none d-md-none d-lg-block">
          <ul>
            <li>
              <a
                className={router.asPath === "/login" ? "menu-active" : ""}
                onClick={() => router.push("/login")}
              >
                Login
              </a>
            </li>

            <li>
              <a
                className={router.asPath === "/register" ? "menu-active" : ""}
                onClick={() => router.push("/register")}
              >
                Register
              </a>
            </li>
            {/* <li>
              <a
                href="https://signup.sixides.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="eQuote-btn">Get eQuote</div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      <Drawer
        title={
          <img
            onClick={() => {
              router.push("/");
              setVisible(false);
            }}
            src={"/images/logo.svg"}
            height="39"
          />
        }
        placement="left"
        width={300}
        onClose={() => onClose()}
        visible={visible}
        maskClosable={true}
        getContainer={true}
        mask={false}
        footer={
          <div className="drawer-footer-links">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <li>
                <a
                  onClick={() => {
                    setVisible(false);
                    router.push("/login");
                  }}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="https://signup.sixides.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="eQuote-btn">Get eQuote</div>
                </a>
              </li>
            </ul>
          </div>
        }
      >
        <MobileNavBar
          storiesMenuList={storiesMenuList}
          closeDrawer={() => setVisible(false)}
          handleStoriesMenuClick={(option) => handleStoriesMenuClick(option)}
        />
      </Drawer>
    </>
  );
}
