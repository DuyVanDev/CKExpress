import images from "@/config/images";
import React, { useState } from "react";
import { Affix, Button, Tooltip, Typography } from "antd";
import { useGlobalState } from "@/hooks";
import InputComp from "@/common/Input/InputComp";
import Select from "react-select";

const Chat = () => {
  const data = [
    { value: "Anh", label: "Anh" },
    { value: "Chị", label: "Chị" },
  ];
  const [show, setShow] = useState(false);
  const [globalState] = useGlobalState();
  const handleShow = () => {
    setShow(true);
    console.log(1);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setShow(false);
  };
  const { about,setting } = globalState;
  return (
    <Affix className="fixed bottom-0 right-[8%] z-[100]">
      <div className="">
        <div
          className={`w-[360px]  shadow-md transition-height delay-150 bg-white rounded-lg ${
            show == true ? "h-[660px]" : "h-[48px]"
          }`}
        >
          <div
            className="flex justify-between items-center p-3 bg-primary text-white rounded-t-lg cursor-pointer"
            onClick={handleShow}
          >
            <p>Chat với {setting.CompanyName}</p>

            <div className="flex items-center gap-3 ">
              <div className="cursor-pointer  px-3 ">
                <i
                  className="fa fa-ellipsis-v"
                  title="Click để thoát khỏi cuộc trò chuyện"
                ></i>
              </div>
              <div className="cursor-pointer  px-3" onClick={handleClose}>
                <i className="fa fa-minus"></i>
              </div>
            </div>
          </div>
          <div className="bg-white  p-3">
            <InputComp placeholder={"Nhập họ tên"} label={"Họ & tên"} />
            <InputComp
              placeholder={"Nhập số điện thoại"}
              label={"Số điện thoại"}
            />
            <span className="flex flex-col gap-2 mb-3">
              <Typography.Title level={5}>
                Kích thước (Dài x Rộng x Cao) (cm)
              </Typography.Title>
              <Select
                options={data}
                placeholder="Anh/Chị muốn được xưng hô là gì"
              />
            </span>

            <InputComp
              placeholder={"Nhập địa chỉ"}
              label={"Địa chỉ (Phường 4 Tân Bình Hồ Chí Minh) :"}
            />
            <InputComp placeholder={"Nhập email"} label={"Email"} />

            <Typography.Title level={5}>Chọn khu vực của bạn</Typography.Title>
            <div className="flex items-center gap-4">
              <InputComp type="radio" text="Miền Bắc" name="location" />
              <InputComp type="radio" text="Miền Trung" name="location" />
              <InputComp type="radio" text="Miền Nam" name="location" />
            </div>
            <div className=" flex items-end justify-end">
              <Button danger type="primary">
                Chat ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Affix>
  );
};

export default Chat;
