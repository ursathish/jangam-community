import axios from "axios";
import { Carousel } from "antd";
import { useCallback, useEffect, useState } from "react";
import HomeService from "../../pages/api/services/home.service";

export default function BannerGallery() {
  const [bannerList, setBannerList] = useState([
    // {name:'',imageUrl:'/images/1.jpeg'},
    //{name:'',imageUrl:'/images/3.jpeg'},
    {name:'',imageUrl:'/images/5.jpeg'},
    {name:'',imageUrl:'/images/2.jpeg'},
    {name:'',imageUrl:'/images/4.jpeg'},
    

  ]);

  useEffect(() => {
    getBanners();
  }, []);
  const getBanners = useCallback(async () => {
    try {
      // const response = await HomeService.getBannerAll({ page: 0, size: 100 });
      // if (response.status === 200) {
      //   if (response.data["banners"]) {
      //     setBannerList(response.data["banners"]);
      //   }
      // }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <div>
        <Carousel autoplay>
          {bannerList.length === 0 && (
            <div>
              <img
                src={"/images/Banner1_new.jpg"}
                className="carousel-img-style"
              />
               {/* <img
                src={"/images/1.jpeg"}
                className="carousel-img-style"
              />
               <img
                src={"/images/2.jpeg"}
                className="carousel-img-style"
              />
               <img
                src={"/images/3.jpeg"}
                className="carousel-img-style"
              /> */}
            </div>
          )}
          {bannerList.map((banner, index) => (
            <div key={index}>
              <img
                alt={banner.name}
                src={banner.imageUrl}
                className="carousel-img-style"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
