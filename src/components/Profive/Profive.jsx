import React from "react";
import CountUp from "../CountUp";
import images from "@/config/images";

const Profive = () => {

  return (
    <div className="bg-lightgreen max-md:px-4">
      <div className=" container flex justify-center items-center">
      <div className="basis-3/12 flex flex-col gap-4 text-center">
        <div className="flex flex-col gap-1">
            <p className="text-primary text-5xl font-bold"><CountUp value={63}/></p>
            <p className="text-text text-xl uppercase">TỈNH THÀNH</p>
            <p className="text-text text-md">Giao nhận toàn bộ 63 tỉnh thành</p>
        </div>
        <div className="flex flex-col gap-1">
            <p className="text-primary text-5xl font-bold"><CountUp value={93}/></p>
            <p className="text-text text-xl uppercase">POD</p>
            <p className="text-text text-md">93 Chi nhánh và POD</p>
        </div><div className="flex flex-col gap-1">
            <p className="text-primary text-5xl font-bold"><CountUp value={750}/></p>
            <p className="text-text text-xl uppercase">PHƯƠNG TIỆN CÁC LOẠI</p>
            <p className="text-text text-md">750+ Phương tiện các loại</p>
        </div>
      </div>
      <div className="basis-6/12">
        <img src={images.DeliveryMan} alt="" />
      </div>
      <div className="basis-3/12 flex flex-col gap-4 text-center">
      <div className="flex flex-col gap-1">
            <p className="text-primary text-5xl font-bold"><CountUp value={3}/></p>
            <p className="text-text text-xl uppercase">TRUNG TÂM</p>
            <p className="text-text text-md">3 Trung tâm điều hành, kho hàng</p>
        </div>
        <div className="flex flex-col gap-1">
            <p className="text-primary text-5xl font-bold"><CountUp value={100}/></p>
            <p className="text-text text-xl uppercase">NHÂN SỰ</p>
            <p className="text-text text-md">100+ nhân sự sẵn sàng phục vụ</p>
        </div><div className="flex flex-col gap-1">
            <p className="text-primary text-5xl font-bold"><CountUp value={150}/></p>
            <p className="text-text text-xl uppercase">XE MÁY</p>
            <p className="text-text text-md">150+ xe máy trên mọi cung đường</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profive;
