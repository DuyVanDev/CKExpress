import InputArea from "@/common/Input/InputArea";
import InputComp from "@/common/Input/InputComp";
import Selector from "@/common/Select/Selector";
import FormSupport from "@/components/FormSupport";
import GoogleMap from "@/components/GoogleMap";
import { useGlobalState } from "@/hooks";
import { Typography } from "antd";
import React from "react";
import Select from "react-select";

const Complain = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  const data = [
    { value: "1", label: "Khiếu nại về dịch vụ" },
    { value: "2", label: "Khiếu nại về cước phí" },
    { value: "3", label: "Khiếu nại về COD" },
  ];
  return (
    <div className="flex container justify-center gap-4  max-lg:flex-col text-black">
      <div className="flex-1 text-inherit">
        <h2 className="text-3xl font-bold">Khiếu nại</h2>

        <InputComp label={"Họ & tên"} placeholder="Họ & tên" require />
        <InputComp label={"Số điện thoại"} placeholder="Số điện thoại" require />
        <InputComp label={"Mã vận đơn"} placeholder="Mã vận đơn" require />
        <Typography.Title level={5} className="text-primary">
          Loại yêu cầu<span className="text-red">(*)</span>
        </Typography.Title>
        <Select
          options={data}
        />
        <Typography.Title level={5} className="text-primary mt-4">
          Nội dung<span className="text-red">(*)</span>
        </Typography.Title>
        <InputArea 
          label={"Nội dung"}
          require
          placeholder={`${setting?.CompanyName} có thể giúp gì cho bạn ?`}
        />
      </div>
      <div className="flex-1">
        <GoogleMap />
      </div>
    </div>
  );
};

export default Complain;
