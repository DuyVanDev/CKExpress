import React, { useState } from "react";
import { Tabs, Input, Button, Image, Typography, Select } from "antd";
import InputComp from "@/common/Input/InputComp";
import FormOrder from "../FormOrder";
import GoogleMap from "../GoogleMap";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Shadow = () => {
  const { Option } = Select;
  const selectAfter = <Select></Select>;

  const list = [
    {
      post: "BƯU CỤC AN GIANG",
      phone: "0972727848",
      address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
    },
    {
      post: "BƯU CỤC AN GIANG",
      phone: "0972727848",
      address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
    },
    {
      post: "BƯU CỤC AN GIANG",
      phone: "0972727848",
      address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
    },
    {
      post: "BƯU CỤC AN GIANG",
      phone: "0972727848",
      address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
    },
    {
      post: "BƯU CỤC AN GIANG",
      phone: "0972727848",
      address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
    },
    {
      post: "BƯU CỤC AN GIANG",
      phone: "0972727848",
      address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
    },
    {
      post: "BƯU CỤC AN GIANG",
      phone: "0972727848",
      address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
    },
    {
      post: "BƯU CỤC AN GIANG",
      phone: "0972727848",
      address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
    },
    {
      post: "BƯU CỤC AN GIANG",
      phone: "0972727848",
      address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
    },
  ];
  const { Search } = Input;
  const { TabPane } = Tabs;
  const [indexTab, setIndexTab] = useState("1");
  const handleTabChange = (key) => {
    setIndexTab(key);
  };

  return (
    <div className="container relative z-50 w-full ">
      <div className="max-md:hidden absolute top-[-54px] w-full h-auto shadow-md tabbar ">
        <Tabs activeKey={indexTab} onChange={handleTabChange}>
          <TabPane
            tab={
              <span
                onMouseLeave={() => stop}
                className="flex items-center justify-center"
              >
                <Image
                  preview={false}
                  src="https://netco.com.vn/assets/img/icon32/search-active.png"
                  width={30}
                  height={30}
                  alt="Image 1"
                />
                <p className="font-medium text-white">TRA CỨU VẬN ĐƠN</p>
              </span>
            }
            key="1"
          >
            <Search
              placeholder="Nhập mã vận đơn"
              enterButton="Search"
              size="large"
            />
          </TabPane>

          <TabPane
            className="tab-2"
            tab={
              <span className="flex items-center justify-center ">
                <Image
                  preview={false}
                  src="https://netco.com.vn/assets/img/icon32/search-active.png"
                  width={30}
                  height={30}
                  alt="Image 1"
                />
                <p className="font-medium text-white">TẠO VẬN ĐƠN / ƯỚC TÍNH CƯỚC PHÍ</p>
              </span>
            }
            key="2"
          >
            <FormOrder />
            {/* Add more Input components as needed */}
          </TabPane>

          <TabPane
            tab={
              <span className="flex items-center tab-3">
                <Image
                  preview={false}
                  src="https://netco.com.vn/assets/img/icon32/search-active.png"
                  width={30}
                  height={30}
                  alt="Image 1"
                />
                <p className="font-medium text-white">HỆ THỐNG BƯU CỤC</p>
              </span>
            }
            key="3"
          >
            <div className="flex  justify-center gap-4">
              <div className="flex-1 flex flex-col  gap-4">
                <Search
                  placeholder="input search text"
                  enterButton
                  className="px-3"
                />
                <div className="overflow-y-scroll h-[500px]">
                  <div className="px-3 flex flex-col gap-3">
                    {list.map((item, index) => (
                      <div
                        key={index}
                        className="flex  justify-between p-4 border-[1px] border-lightgray rounded-md bg-background cursor-pointer"
                      >
                        <div className="flex flex-col gap-2  ">
                          <p className="font-medium text-xl uppercase">
                            {index + 1}. {item.post}
                          </p>
                          <span className="flex items-center gap-2">
                            <img
                              src="https://netco.com.vn/assets/img/icon24/phone.png"
                              alt=""
                            />{" "}
                            <p>{item.phone}</p>
                          </span>
                          <span className="flex items-center gap-2">
                            <img
                              src="https://netco.com.vn/assets/img/icon24/location.png"
                              alt=""
                            />
                            <p>{item.address}</p>{" "}
                          </span>
                        </div>
                        <p className="text-primary">Xem đường đi</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <GoogleMap />
              </div>
            </div>
            {/* Add more Input components as needed */}
            <Button type="primary">Submit</Button>
          </TabPane>
          {/* Add more TabPane components as needed */}
        </Tabs>
        <div className="bg-white"></div>
      </div>

      <div className="max-md:block hidden my-4">
        <div>
          <Link to={"/tra-cuu-don-hang"} className="flex items-center gap-4 shadow-md rounded-md bg-white p-4 mt-4">
            <span>
              <img
                src="https://admin-netco.vps.vn//Image/ckfinder/images/assets/icon24/Fill%20972.png"
                alt=""
              />
            </span>
            <p className="grow">TRA CỨU VẬN ĐƠN</p>
            <p>
              <RightOutlined />
            </p>
          </Link>
          <Link to={"/tinh-phi-van-chuyen"} className="flex items-center gap-4 shadow-md rounded-md bg-white p-4 mt-4">
            <span>
              <img
                src="https://admin-netco.vps.vn//Image/ckfinder/images/assets/icon24/Fill%20972.png"
                alt=""
              />
            </span>
            <p className="grow">TẠO VẬN ĐƠN / ƯỚC TÍNH CƯỚC PHÍ</p>
            <p>
              <RightOutlined />
            </p>
          </Link>
          <div className="flex items-center gap-4 shadow-md rounded-md bg-white p-4 mt-4">
            <span>
              <img
                src="https://admin-netco.vps.vn//Image/ckfinder/images/assets/icon24/Fill%20972.png"
                alt=""
              />
            </span>
            <p className="grow">HỆ THỐNG BƯU CỤC</p>
            <p>
              <RightOutlined />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shadow;
