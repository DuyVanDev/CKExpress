import InputArea from "@/common/Input/InputArea";
import InputComp from "@/common/Input/InputComp";
import Selector from "@/common/Select/Selector";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { City, State } from "country-state-city";
import { useGlobalState } from "@/hooks";


const FormSupport = () => {
  const [ globalState, dispatch] = useGlobalState();
  const {setting } = globalState;
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    const statesData = State.getStatesOfCountry("VN");
    setStates(statesData);
  }, []);
  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);

  };
  return (
    <div className="p-8 flex flex-col gap-4 text-inherit">
      <h3 className="text-center text-xl font-medium">
        Thông tin hỗ trợ khách hàng
      </h3>
      <InputComp placeholder={"Nhập họ tên"} />
      <InputComp placeholder={"Nhập email"} />
      <InputComp placeholder={"Nhập số điện thoại"} />
      <Selector
        data={states}
        label={"Chọn khu vực của bạn"}
        placeholder={"Nhập họ tên"}
      />
      <InputComp
        require
        label={"Bạn cần hỗ trợ gì ?"}
        type="radio"
        text="Tư vấn / báo giá"
      />
      <InputArea
        placeholder={
          `${setting.CompanyName} có thể giúp gì cho bạn ? Hãy cho chúng tôi biết ...`
        }
      />
      <div className="w-12 mx-auto">
        <Button type="primary" className="w-20 font-bold" danger>
          {" "}
          Gửi
        </Button>
      </div>
    </div>
  );
};

export default FormSupport;
