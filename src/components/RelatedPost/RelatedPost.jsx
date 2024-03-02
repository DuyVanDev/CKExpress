import { Button } from "antd";
import React from "react";

const RelatedPost = () => {
  const lst = [
    {
      title: "Company overview",
      url: "/moi-tham-gia-dau-thau-thanh-ly-xe-dot-2",
    },
    {
      title: "Company overview",
      url: "/moi-tham-gia-dau-thau-thanh-ly-xe-dot-2",
    },
    {
      title: "Company overview",
      url: "/moi-tham-gia-dau-thau-thanh-ly-xe-dot-2",
    },
    {
      title: "Company overview",
      url: "/moi-tham-gia-dau-thau-thanh-ly-xe-dot-2",
    },
    {
      title: "Company overview",
      url: "/moi-tham-gia-dau-thau-thanh-ly-xe-dot-2",
    },
  ];
  return (
    <div className="flex flex-col gap-4 ">
      <p className="text-2xl font-medium">Bài viết liên quan</p>

      <div className="flex flex-col gap-2">
      {lst.map((item, index) => (
        <div key={index} className="flex items-center gap-4 shadow-md rounded-md bg-white p-2">
          <span>
            <img
              src="https://admin-netco.vps.vn//Image/ckfinder/images/assets/icon24/Fill%20972.png"
              alt=""
            />
          </span>
          <p>{item.title}</p>
        </div>
      ))}
      </div>

      <p className="font-semibold">Chia sẻ lên mạng xã hội</p>
      <div className="flex items-center gap-4">
        <img src="https://netco.com.vn/assets/img/fb-square.png" alt="" />
        <img src="https://netco.com.vn/assets/img/fb-square.png" alt="" />
        <img src="https://netco.com.vn/assets/img/fb-square.png" alt="" />
      </div>
      <Button type="primary" danger className="text-white font-medium">
        Tạo vận đơn
      </Button>
    </div>
  );
};

export default RelatedPost;
