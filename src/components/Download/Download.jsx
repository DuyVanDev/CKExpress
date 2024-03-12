import { IMAGES_DOMAIN } from "@/services";
import React from "react";

const Download = ({ setting }) => {
  return (
    <div className="bg-lightgreen max-md:px-4">
      <div className="container flex items-center gap-3 pt-10 max-lg:flex-col">
        <div className="flex-1">
          <img
            src="https://ckexpress.vn/assets/gtel/App%20installation-cuate.png"
            alt=""
          />
        </div>
        <div className="flex-1 flex gap-6 flex-col">
          <h3 className="text-5xl font-bold text-gray">
            Tải app <span className="text-primary">{setting?.CompanyName}</span>{" "}
            !!!
          </h3>
          <p className="text-md font-medium">
            Thao tác đơn giản, kiểm soát thông tin dễ dàng và hàng ngàn ưu đãi!
          </p>
          <div className="flex items-center justify-center gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={IMAGES_DOMAIN + setting?.QRCode?.slice(0, -1)}
              alt=""
            />
            <img
              className="w-[60px] h-[60px]"
              src={IMAGES_DOMAIN + setting?.QRCode?.slice(0, -1)}
              alt=""
            />
             <img
              className="w-[60px] h-[60px]"
              src={IMAGES_DOMAIN + setting?.QRCode?.slice(0, -1)}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={IMAGES_DOMAIN + setting?.QRCode?.slice(0, -1)}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
