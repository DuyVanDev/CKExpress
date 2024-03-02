import InputComp from "@/common/Input/InputComp";
import images from "@/config/images";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import '@/index.css';

const SignIn = () => {
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
    <div className="h-screen bg-login bg-no-repeat bg-cover py-12">
      <div className="container flex flex-col items-center w-full bg-white rounded-2xl p-8">
        <div className="mb-3">
          <img width={200} src={images.Logo} alt="" />
        </div>
        <div className="container flex  w-full">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-red">NETCO</span> CÓ GÌ HOT ?
            </h3>
            <ul className="flex flex-col gap-3">
              {lst.map((item, index) => (
                <li>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-primary ">
                      <CheckOutlined />
                    </span>
                    <p className="font-bold text-xl">{item.title}</p>
                  </div>
                  <p className="italic">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 ">
            <div className="w-[60%] flex flex-col gap-3">
            <h3 className="text-2xl font-bold">ĐĂNG NHẬP</h3>
            <p className="">
              Bạn chưa có tài khoản? <span className="text-blue font-semibold hover:text-primary cursor-pointer">Đăng ký ngay</span>
            </p>
            <InputComp
              label={"Email/số điện thoại"}
              placeholder="Nhập email hoặc số điện thoại"
            />
            <InputComp
              type="password"
              label={"Mật khẩu"}
              placeholder="Nhập mật khẩu"
            />
            <p className="self-end font-medium hover:text-primary cursor-pointer">Quên mật khẩu ?</p>
            <Button type="primary" className="bg-primary font-medium">
              Đăng nhập
            </Button>
            <Button className="border-primary font-medium">
              Đăng nhập nhanh với Google
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
