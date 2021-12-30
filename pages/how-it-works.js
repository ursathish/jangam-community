import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="container static-section  ">
      <h2 className="title-text">Start your renovation journey with us</h2>

      <div className="row move-left">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="right">
          <img src={"/images/how-it-works/01.jpg"} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-center">
          <div className="">
            <h1>01</h1>
            <p>Explore verified professionals and vendors for your home </p>
          </div>
        </div>
      </div>

      <div className="row flex-column-reverse flex-md-row move-right">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-right-center">
          <div>
            <h1>02</h1>
            <p>Learn more and get inspirations from our stories </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="left">
          <img src={"/images/how-it-works/02.jpg"} />
        </div>
      </div>

      <div className="row move-left">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="right">
          <img src={"/images/how-it-works/03.jpg"} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-center">
          <div className="">
            <h1>03</h1>
            <p>Get designer recommendations based on your renovation needs </p>
          </div>
        </div>
      </div>

      <div className="row flex-column-reverse flex-md-row move-right">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-right-center">
          <div>
            <h1>04</h1>
            <p>Select and engage your preferred designer instantly </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="left">
          <img src={"/images/how-it-works/04.jpg"} />
        </div>
      </div>

      <div className="row move-left">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="right">
          <img src={"/images/how-it-works/05.jpg"} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-center">
          <div className="">
            <h1>05</h1>
            <p>
              Track your renovation progress and get designer notifications{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row flex-column-reverse flex-md-row move-right">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-right-center">
          <div>
            <h1>06</h1>
            <p>Review your designers and help other aspiring homeowners </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="left">
          <img src={"/images/how-it-works/06.jpg"} />
        </div>
      </div>
    </div>
  );
}
