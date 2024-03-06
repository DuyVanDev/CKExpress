import images from "@/config/images";
import { dataTop } from "./handleData";
import RecursiveMenu from "./RecursiveMenu";
import PropTypes from "prop-types";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Button, Popover } from "antd";
import { Link } from "react-router-dom";
import { useGlobalState } from "@/hooks";

const MenuPc = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  const lg = [
    {
      title: "Tiếng Việt",
      img: images.VietNam,
    },
    {
      title: "English",
      img: images.EngLish,
    },
  ];
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visibility) => {
    setVisible(visibility);
  };
  const content = (
    <div className="bg-gray w-[280px] flex flex-col">
      <div className=" bg-lightgray p-2 text-lg font-medium cursor-pointer text-white border-b hover:bg-gray">
        Thông báo
      </div>
      <div className="divide-y-[1px] divide-white">
        <div className="p-2 flex flex-col gap-2 cursor-pointer">
          <p className="text-md font-medium text-white">
            Danh sách các điểm hạn chế giao hàng do ảnh hưởng dịch Covid-19
          </p>
          <p className="text-primary font-medium text-md">23/08/2021</p>
        </div>
        <div className="p-2 flex flex-col gap-2 cursor-pointer">
          <p className="text-md font-medium text-white">
            Danh sách các điểm hạn chế giao hàng do ảnh hưởng dịch Covid-19
          </p>
          <p className="text-primary font-medium text-md">23/08/2021</p>
        </div>
      </div>
    </div>
  );
  const [language, setLanguage] = useState(lg[0]);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className=" bg-white">
        <div className="p-1 container">
          <div className="max-w-screen-xl flex flex-wrap items-center  justify-between">
            <Link to={"/"}>
              <img src={setting.Logo} alt="" className="w-44" />
            </Link>
            <div className="flex items-center gap-4">
              <div>
                <span className="block py-2 px-3 text-black md:p-0 ">
                  Hotline:{" "}
                  <span className="text-primary font-medium">
                    {setting.Hotline}
                  </span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className=" dropdown w-[150px] relative m-4 "
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div className="select text-black flex gap-2 items-center cursor-pointer ">
                  <span className="selected whitespace-nowrap text-md font-medium ">
                    {language.title}
                  </span>
                  <img className="w-8" src={language.img} alt="" />
                  <div className={`caret  `}></div>
                  <ul
                  className={`menu  mt-[-24px]  justify-center flex-col shadow-lg rounded-md bg-white z-[100] `}
                >
                  {lg.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setLanguage(lg[index]);
                        setHover(false);
                      }}
                      className="flex items-center justify-center gap-2  hover:bg-primary  rounded-md"
                    >
                      <span className="whitespace-nowrap text-md font-medium">
                        {item.title}
                      </span>{" "}
                      <img className="w-10" src={item.img} alt="" />
                    </li>
                  ))}
                </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-2xl bg-primary">
        <div className="container flex flex-wrap items-center justify-between mx-auto gap-5 ">
          <div className="flex flex-wrap items-center  gap-5">
            <RecursiveMenu />
          </div>
          <div className="flex items-center gap-4">
            <Link to={"/tra-cuu-don-hang"} className="text-white">
              <i className="fa-solid fa-magnifying-glass "></i>
            </Link>
            <Popover
              className="z-[9999]"
              content={content}
              trigger="click"
              placement="bottomRight"
              visible={visible}
              onVisibleChange={handleVisibleChange}
            >
              <span className="text-white cursor-pointer">
                <i className="fa-regular fa-bell"></i>
              </span>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

MenuPc.propTypes = {};

export default MenuPc;
