import { Button, Carousel } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../hooks";
import { GROUPID, callApi } from "../../services/Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import moment from "moment";
import "swiper/css";
import { Link } from "react-router-dom";
const Notify = () => {
  const list = [
    {
      image:
        "https://azwebsite.vn/wp-content/uploads/2023/02/uu-dai-dich-vu-quang-cao-google-1-768x768.jpg",
      title: "Ưu Đãi Hấp Dẫn Khi Đăng Ký Dịch Vụ Quảng Cáo Google",
      desc: "Mừng Xuân Quý Mão, AZWebsite tung hàng loạt ưu đãi hấp dẫn khi đăng ký dịch vụ Quảng cáo Google tại AZWebsite như: Giảm giá từ 20% tổng...					",
      createAt: "11/02/2023, 10:18",
    },
    {
      image:
        "https://azwebsite.vn/wp-content/uploads/2023/02/uu-dai-dich-vu-quang-cao-google-1-768x768.jpg",
      title: "Ưu Đãi Hấp Dẫn Khi Đăng Ký Dịch Vụ Quảng Cáo Google",
      desc: "Mừng Xuân Quý Mão, AZWebsite tung hàng loạt ưu đãi hấp dẫn khi đăng ký dịch vụ Quảng cáo Google tại AZWebsite như: Giảm giá từ 20% tổng...					",
      createAt: "11/02/2023, 10:18",
    },
    {
      image:
        "https://azwebsite.vn/wp-content/uploads/2023/02/uu-dai-dich-vu-quang-cao-google-1-768x768.jpg",
      title: "Ưu Đãi Hấp Dẫn Khi Đăng Ký Dịch Vụ Quảng Cáo Google",
      desc: "Mừng Xuân Quý Mão, AZWebsite tung hàng loạt ưu đãi hấp dẫn khi đăng ký dịch vụ Quảng cáo Google tại AZWebsite như: Giảm giá từ 20% tổng...					",
      createAt: "11/02/2023, 10:18",
    },
    {
      image:
        "https://azwebsite.vn/wp-content/uploads/2023/02/uu-dai-dich-vu-quang-cao-google-1-768x768.jpg",
      title: "Ưu Đãi Hấp Dẫn Khi Đăng Ký Dịch Vụ Quảng Cáo Google",
      desc: "Mừng Xuân Quý Mão, AZWebsite tung hàng loạt ưu đãi hấp dẫn khi đăng ký dịch vụ Quảng cáo Google tại AZWebsite như: Giảm giá từ 20% tổng...					",
      createAt: "11/02/2023, 10:18",
    },
  ];

  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  const [DataSlider, setDataSlider] = useState([]);

  const Shop_spWeb_Slides_List = async () => {
    const params2 = {
      Json: JSON.stringify({
        Domain: "",
        GroupId: GROUPID,
      }),
      func: "Shop_spWeb_Slides_List",
    };

    try {
      const result2 = await callApi.Main(params2);
      setDataSlider(result2);
    } catch (err) {
      console.log(err, "Shop_spWeb_Slides_List");
    }
  };
  useEffect(() => {
    Shop_spWeb_Slides_List();
  }, []);

  const settings = {
    nextArrow: <ArrowRightOutlined />,
    prevArrow: <ArrowLeftOutlined />,
  };

  return (
    <div className=" py-11 h-auto max-sm:px-2 max-lg:px-2 gap-2">
      <div className="flex gap-3 max-sm:flex-wrap max-lg:flex-wrap">
        {/* left */}
        <div className="flex flex-col flex-1  max-sm:basis-12/12 max-lg:basis-12/12">
          <div className="flex items-center justify-between max-sm:flex-col">
            <p className=" uppercase text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue to-greenlight ">
              Thông báo - Khuyến mãi
            </p>
            <a className="cursor-pointer text-greenlight text-xs self-center max-sm:self-end">
              Xem thêm
            </a>
          </div>

          <div className="mb-3 w-full flex">
            <hr className="w-[80%] h-[2px] bg-blue outline-none border-none max-sm:w-full" />
            <hr className="w-[20%] h-[2px] bg-gray outline-none border-none max-sm:w-0" />
          </div>
          <div className="  bottom-[40px] w-[500px] max-sm:w-[360px] max-sm:gap-x-2 ">
            {/* <Carousel

              autoplay
              dotPosition='bottom-0'
              className='flex basis-1/2'
              {...settings}
            > */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              loop={true}
              pagination={{ clickable: true }}
              centeredSlides={true}
              slidesPerView={1}
              grabCursor={true}
              scrollbar={{ draggable: true }}
              mousewheel={{
                invert: false,
              }}
              autoplay={{
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
              }}
              className="breakpoint"
            >
              {list.map((item, index) => (
                <SwiperSlide>
                  <div className="group cursor-pointer" key={index}>
                    <div className="h-[360px] ">
                      <img
                        className="h-full w-full object-cover"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <p className="text-sm font-bold">{item.title}</p>
                      <div className="w-full ">
                        <hr className="w-[50%] h-[1px] bg-greenlight outline-none border-none" />
                      </div>
                      <p className="text-[11px] group-hover:text-blue transition-all">
                        {item.desc.slice(0, 100) + "..."}
                      </p>
                      <p className="text-[12px] italic mb-8 group-hover:text-blue transition-all">
                        {item.createAt}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* </Carousel> */}
          </div>
        </div>
        {/* right */}
        <div className="flex-1  flex flex-col max-sm:basis-12/12 max-lg:basis-12/12">
          <div className="flex items-start justify-between mb-1">
            <p className=" uppercase text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue to-greenlight ">
              KIẾN THỨC WEBSITE
            </p>
            <a className="cursor-pointer text-greenlight text-xs">Xem thêm</a>
          </div>
          <div className="mb-3 w-full flex">
            <hr className="w-[50%] h-[2px] bg-greenlight outline-none border-none" />
            <hr className="w-[50%] h-[2px] bg-gray outline-none border-none" />
          </div>
          <div className="grid grid-cols-1 grid-rows-4  max-sm:grid-cols-2 max-sm:grid-rows-2 ">
            {list.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer group flex items-center justify-center gap-3 max-sm:basis-1/2 max-sm:flex-col max-sm:px-4"
              >
                <div className="w-[118px] h-[100px] max-sm:w-[150px] max-sm:h-[150px] py-4 basis-3/12">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                  />
                </div>
                <div className="basis-9/12 flex items-start flex-col gap-1">
                  <p className="text-xs font-bold">{item.title}</p>
                  <div className="w-full ">
                    <hr className="w-[50%] h-[1px] bg-greenlight outline-none border-none" />
                  </div>
                  <p className="text-[11px] group-hover:text-blue transition-all">
                    {item.desc.slice(0, 100) + "..."}
                  </p>
                  <p className="text-[12px] group-hover:text-blue transition-all">
                    {item.createAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;
