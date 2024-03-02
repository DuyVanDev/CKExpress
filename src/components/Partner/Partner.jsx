import { useGlobalState } from "@/hooks";
import React from "react";

const Partner = () => {
  const [ globalState, dispatch] = useGlobalState();
  const {setting } = globalState;
  const list = [
    "https://admin-netco.vps.vn//Image/ckfinder/images/Boke.jpg",
    "https://admin-netco.vps.vn//Image/ckfinder/images/Boke.jpg",
    "https://admin-netco.vps.vn//Image/ckfinder/images/Boke.jpg",
    "https://admin-netco.vps.vn//Image/ckfinder/images/Boke.jpg",
    "https://admin-netco.vps.vn//Image/ckfinder/images/Boke.jpg",
    "https://admin-netco.vps.vn//Image/ckfinder/images/Boke.jpg",
    "https://admin-netco.vps.vn//Image/ckfinder/images/Boke.jpg",
    "https://admin-netco.vps.vn//Image/ckfinder/images/Boke.jpg",
  ];
  return (
    <div className="container p-4">
      <div className="text-center py-8">
        <h3 className="text-5xl font-bold mb-2"><span className="text-primary">Khách hàng</span> tiêu biểu</h3>
        <p className="text-md font-medium">99% khách hàng hài lòng với dịch vụ chuyển phát nhanh {setting.CompanyName}</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 justify-center ">
        {list.map((item, index) => (
          <div key={index} className="shadow-lg">
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
