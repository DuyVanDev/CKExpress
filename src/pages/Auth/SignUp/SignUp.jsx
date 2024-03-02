import InputComp from "@/common/Input/InputComp";
import images from "@/config/images";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { City, State } from "country-state-city";
import "@/index.css";
import Selector from "@/common/Select/Selector";

const SignUp = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    const statesData = State.getStatesOfCountry("VN");
    setStates(statesData);
  }, []);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);

    // Lấy danh sách các thành phố của tỉnh/thành phố được chọn
    const citiesData = City.getCitiesOfState("VN", selectedOption.value);
    setCities(citiesData);
    setSelectedCity(null);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);

    // Lấy danh sách các thành phố của tỉnh/thành phố được chọn
  };
  const lst = [
    {
      title: "Vận chuyển an toàn",
      desc: "Hàng hóa của khách hàng được bảo đảm an toàn tới tay người nhận",
    },
    {
      title: "Vận chuyển an toàn",
      desc: "Hàng hóa của khách hàng được bảo đảm an toàn tới tay người nhận",
    },
    {
      title: "Vận chuyển an toàn",
      desc: "Hàng hóa của khách hàng được bảo đảm an toàn tới tay người nhận",
    },
    {
      title: "Vận chuyển an toàn",
      desc: "Hàng hóa của khách hàng được bảo đảm an toàn tới tay người nhận",
    },
    {
      title: "Vận chuyển an toàn",
      desc: "Hàng hóa của khách hàng được bảo đảm an toàn tới tay người nhận",
    },
  ];
  return (
    <div className="h-full bg-login bg-no-repeat bg-cover py-12">
      <div className="container flex flex-col items-center w-full bg-white rounded-2xl p-8">
        <div className="container flex w-full gap-8">
          <div className="flex-1 bg-branch2 bg-center bg-no-repeat bg-cover text-right p-4 bg-hero">
            <h3 className="text-2xl font-bold mb-6 text-primary">
            REGISTER NOW
            </h3>
            <p className="text-white font-medium">Đăng ký tài khoản để dễ dàng tạo và theo dõi đơn hàng của quý khách!</p>
          </div>

          <div className="flex-1 ">
            <div className="w-[60%] flex flex-col gap-2">
              <div className="mb-3">
                <img width={200} src={images.Logo} alt="" />
              </div>
              <h3 className="text-2xl font-bold">ĐĂNG KÝ TÀI KHOẢN</h3>
              <p className="">
                Bạn đã có tài khoản rồi?
                <span className="text-blue font-semibold hover:text-primary cursor-pointer">
                  Đăng nhập ngay
                </span>
              </p>
              <InputComp
                require
                label={"Email/số điện thoại"}
                placeholder="Nhập email hoặc số điện thoại"
              />
              <InputComp
                require
                type="password"
                label={"Mật khẩu"}
                placeholder="Nhập mật khẩu"
              />
              <InputComp
                require
                label={"Email/số điện thoại"}
                placeholder="Nhập email hoặc số điện thoại"
              />
              <InputComp
                require
                label={"Email/số điện thoại"}
                placeholder="Nhập email hoặc số điện thoại"
              />
              <InputComp
                require
                label={"Email/số điện thoại"}
                placeholder="Nhập email hoặc số điện thoại"
              />
              <Selector
                label={"Gửi từ"}
                selected={selectedState}
                onSelected={handleStateChange}
                data={states}
              />
              <Selector
                label={"Quận huyện"}
                selected={selectedCity}
                onSelected={handleCityChange}
                data={cities}
              />
              <InputComp
                require
                label={"Email/số điện thoại"}
                placeholder="Nhập email hoặc số điện thoại"
              />
              <InputComp
                require
                label={"Email/số điện thoại"}
                placeholder="Nhập email hoặc số điện thoại"
              />
              
              <Button type="primary" className="bg-primary font-medium">
                Đăng nhập
              </Button>
              <p className="text-xs leading-7">
                Khi nhấn đăng ký, quý khác đã đồng ý với Điều khoản sử dụng dịch
                vụ của NETCO post. Nếu quý khách không đăng ký được tài khoản,
                vui lòng liên hệ hotline{" "}
                <span className="text-red">1900 6463</span> để được hỗ trợ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
