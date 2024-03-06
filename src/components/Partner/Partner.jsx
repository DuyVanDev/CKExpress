import { useGlobalState } from "@/hooks";
import React from "react";

const Partner = () => {
  const [ globalState, dispatch] = useGlobalState();
  const {setting } = globalState;
  const list = [
    "https://api-ckexpress.vps.vn//Image/ckfinder/files/cropped-ko-n%E1%BB%81n.png",
    "https://api-ckexpress.vps.vn//Image/ckfinder/files/2-02%20(1).png",
  ];
  return (
    <div className="container p-6">
      <div className="text-center ">
        <h3 className="text-5xl font-bold mb-2"><span className="text-primary">Khách hàng</span> tiêu biểu</h3>
        <p className="text-md font-medium">99% khách hàng hài lòng với dịch vụ chuyển phát nhanh {setting.CompanyName}</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 justify-center ">
        {list.map((item, index) => (
          <div key={index} className=" w-[200px] h-[100px] shadow-lg">
            <img src={item} alt="" className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
