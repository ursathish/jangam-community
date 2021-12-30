import { Menu } from "antd";
import { useRouter } from "next/router";
const { SubMenu } = Menu;

export default function MobileNavBar({
  storiesMenuList = [],
  handleStoriesMenuClick,
  closeDrawer,
}) {
  const router = useRouter();
  return (
    <>
      <Menu style={{ width: "100%" }} mode="inline">
        <SubMenu key="sub1" title="Verified">
          <Menu.Item key="1">
            <a
              onClick={() => {
                closeDrawer();
                router.push("/professionals");
              }}
            >
              Professionals
            </a>
          </Menu.Item>
          <Menu.Item key="2">
            <a
              onClick={() => {
                closeDrawer();
                router.push("/vendors");
              }}
            >
              Vendors
            </a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="3">
          <a
            onClick={() => {
              closeDrawer();
              router.push("/spaces");
            }}
          >
            Spaces
          </a>
        </Menu.Item>
        <SubMenu key="sub3" title="Stories">
          <Menu.Item key="1500">
            <a
              onClick={() => {
                closeDrawer();
                router.push("/stories");
              }}
            >
              Featured
            </a>
          </Menu.Item>

          {storiesMenuList.map((option, index) => (
            <Menu.Item key={index * 100}>
              <a onClick={() => handleStoriesMenuClick(option)}>
                {option?.menuName}
              </a>
            </Menu.Item>
          ))}
        </SubMenu>

        <Menu.Item key="5">
          <a
            onClick={() => {
              closeDrawer();
              router.push("/about-us");
            }}
          >
            About
          </a>
        </Menu.Item>
        <SubMenu key="sub2" title="Info">
          <Menu.Item key="6">
            <a
              onClick={() => {
                closeDrawer();
                router.push("/how-it-works");
              }}
            >
              How it works
            </a>
          </Menu.Item>
          <Menu.Item key="7">
            <a
              onClick={() => {
                closeDrawer();
                router.push("/contact-us");
              }}
            >
              Contact us
            </a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}
