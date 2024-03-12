import images from "@/config/images";
import { useGlobalState } from "@/hooks";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment"

const AnotherServices = ({rest}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-medium">Vị trí tuyển dụng khác</p>
      {Array.isArray(rest) &&
        rest?.map((item, index) => (
          <Link to={{
            pathname : "/thong-tin-tuyen-dung",
            search : `title=${item?.Url}`
          }} key={index} className="bg-white px-6 py-3">
            <span className="flex flex-col gap-2">
              
              <p className="font-bold text-primary">{item?.CarrerName}</p>
              <p className="text-xs">{moment(item?.CreateOn).format('DD/MM/YYYY')}</p>
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
