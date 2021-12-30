import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import AboutUs1 from "../public/images/aboutUs/What-We-Do2.gif";
import AboutUs2 from "../public/images/aboutUs/Why-Choose-Us2.gif";
import AdrianIcon from "../public/images/aboutUs/adrian.png";
import AstleyIcon from "../public/images/aboutUs/astley.png";
import KezsIcon from "../public/images/aboutUs/kezs.png";
import JoeIcon from "../public/images/aboutUs/joe.png";
import JamieIcon from "../public/images/aboutUs/jamie.png";
import LeonIcon from "../public/images/aboutUs/leon.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function AboutUs() {
  return (
    <div className="container static-section about-us-section">
      <h2 className="title-text">Who we are</h2>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="right">
          <Image src={AboutUs1} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-center">
          <div className="">
            <p>
              Sixides is an <span>ID-tech, consumer driven platform </span> to
              bridge homeowners towards professionals, vendors and institutions
            </p>
          </div>
        </div>
      </div>
      <div className="row flex-column-reverse flex-md-row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-right-center">
          <div>
            <p>
              Our mission is to <span>safeguard homeowners</span> by qualifying,
              verifying, listing professionals and vendors who meet industry
              standards
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 " align="left">
          <Image src={AboutUs2} />
        </div>
      </div>
      <h2 className="title-text">Our Team</h2>
      <div className="our-team-section">
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={1500}
          arrows={false}
          showDots={true}
        >
          <div>
            <Image src={AstleyIcon} />
            <div>
              <h5>Astley Ng</h5>
              <div>CEO</div>
            </div>
          </div>
          <div>
            <Image src={AdrianIcon} />
            <div>
              <h5>Adrian Yeo</h5>
              <div>CTO</div>
            </div>
          </div>
          <div>
            <Image src={KezsIcon} />
            <div>
              <h5>Kezs Tan</h5>
              <div>Ops</div>
            </div>
          </div>
          <div>
            <Image src={JoeIcon} />
            <div>
              <h5>Joe Cao</h5>
              <div>Marketing</div>
            </div>
          </div>
          <div>
            <Image src={JamieIcon} />
            <div>
              <h5>Jamie Kang</h5>
              <div>Business Development</div>
            </div>
          </div>
          <div>
            <Image src={LeonIcon} />
            <div>
              <h5>Leon Yap</h5>
              <div>Head of Creative</div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
