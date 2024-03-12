import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IMAGES_DOMAIN } from "@/services";
  
const Banner = ({slide}) => {

  return (
    <div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      pagination={{ clickable: true }}
      slidesPerView={1}
      centeredSlides={true}
      scrollbar={{ draggable: true }}
      navigation
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
    >
      {slide.length > 0 && slide?.map((item, index) => {
        return (
          <SwiperSlide key={index} >
            <div key={index}>
              <img className="w-full h-full object-contain" src={IMAGES_DOMAIN+item.Image.slice(0,-1)} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </div>
  );
};

export default Banner;
