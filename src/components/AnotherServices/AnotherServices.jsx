import images from "@/config/images";
import { useGlobalState } from "@/hooks";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AnotherServices = ({menuName,restData}) => {
  console.log(restData)
  return (
    <div className="flex flex-col gap-2">
      {menuName && <p className="text-2xl font-medium">{menuName} khác</p>} 
      {Array.isArray(restData) &&
        restData.slice(0,5)?.map((item, index) => (
          <Link to={{
            pathname : "/dich-vu",
            search : `title=${item?.UrlDetail}`
          }} key={index} className="bg-white px-6 py-3 hover:bg-primary">
            <span className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] ">
                <img
                  src={item?.ImageNewsShow || "https://admin-netco.vps.vn//Image/ckfinder/images/Vector.png"}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
              <p>{item?.NewsTitle}</p>
            </span>
          </Link>
        ))}
      <p className="font-semibold">Chia sẻ lên mạng xã hội</p>
      <div className="flex items-center gap-4">
        <img src={images.FaceBookIcon} alt="" />
        <img src={images.GoogleIcon} alt="" />
        <img src={images.TwiterIcon} alt="" />
      </div>
      <Button type="primary" danger className="text-white font-medium">
        Tạo vận đơn
      </Button>
    </div>
  );
};

export default AnotherServices;
