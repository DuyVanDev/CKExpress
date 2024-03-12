import InputComp from "@/common/Input/InputComp";
import { Button } from "antd";
import React from "react";

const TrackingBill = () => {
  return (
    <div className="container py-12 ">
      <h3 className="text-3xl font-medium mb-3">Tra cứu vận đơn</h3>
      <div className=" bg-white p-4 rounded-md border-[1px] border-lightgreen flex flex-col gap-3">
       <div className="flex items-center justify-between max-md:flex-col gap-3">
       <InputComp className={"basis-4/12 max-md:w-full"} label={"Mã vận đơn | Mã DO"} placeholder="Nhập mã vận đơn"/>
        <InputComp className={"basis-3/12 max-md:self-start"}  text={"Tìm kiếm bằng mã vận đơn"} type="radio" name="search" checked={true}/>
        <InputComp className={"basis-3/12  max-md:self-start"} text={"Tìm kiếm bằng mã DO"} type="radio" name="search"/>

        <Button className={"basis-1/12 max-md:w-full"} type="primary" danger> Tra cứu</Button>
       </div>
      <p className="text-center">Mọi đóng góp ý kiến quý khách hàng vui lòng gửi về mail: CK EXPRESS@gtel.org.vn</p>
      <p className="text-center text-xl">Không tìm thấy vận đơn hoặc vận đơn đã vượt quá thời hạn tra cứu. Vui lòng tải app để xem thông tin</p>
      </div>
    </div>
  );
};

export default TrackingBill;
