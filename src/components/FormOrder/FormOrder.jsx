import InputComp from "@/common/Input/InputComp";
import { Button, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { City, State } from "country-state-city";
import Selector from "@/common/Select/Selector";

const FormOrder = () => {
  const [fromStates, setFromStates] = useState([]);
  const [toStates, setToStates] = useState([]);
  const [selectedFromState, setSelectedFromState] = useState(null);
  const [selectedToState, setSelectedToState] = useState(null);
  const [fromCities, setFromCities] = useState([]);
  const [toCities, setToCities] = useState([]);
  const [selectedToCity, setSelectedToCity] = useState(null);
  const [selectedFromCity, setSelectedFromCity] = useState(null);
  useEffect(() => {
    const statesData = State.getStatesOfCountry("VN");
    setFromStates(statesData);
    setToStates(statesData);
  }, []);

  const handleFromStateChange = (selectedOption) => {
    setSelectedFromState(selectedOption);

    // Lấy danh sách các thành phố của tỉnh/thành phố được chọn
    const citiesData = City.getCitiesOfState("VN", selectedOption.value);
    setFromCities(citiesData);
    setSelectedFromCity(null);
  };

  const handleToStateChange = (selectedOption) => {
    setSelectedToState(selectedOption);

    // Lấy danh sách các thành phố của tỉnh/thành phố được chọn
    const citiesData = City.getCitiesOfState("VN", selectedOption.value);
    setToCities(citiesData);
    setSelectedToCity(null);
  };

  const handleFromCityChange = (selectedOption) => {
    setSelectedFromCity(selectedOption);
  };

  const handleToCityChange = (selectedOption) => {
    setSelectedToCity(selectedOption);

    // Lấy danh sách các thành phố của tỉnh/thành phố được chọn
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          {/* <Select options={countryData} placeholder={"Tinh"}/> */}
          <Selector
            label={"Gửi từ"}
            selected={selectedFromState}
            onSelected={handleFromStateChange}
            data={fromStates}
          />
        </div>
        <div>
          {/* <Select options={countryData} placeholder={"Tinh"}/> */}
          <Selector
            placeholder={fromCities.length > 0 ? "Chọn quận huyện" : ""}
            label={"Quận huyện"}
            selected={selectedFromCity}
            onSelected={handleFromCityChange}
            data={fromCities}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {/* <Select options={countryData} placeholder={"Tinh"}/> */}
          <Selector
            label={"Gửi đến"}
            selected={selectedToState}
            onSelected={handleToStateChange}
            data={toStates}
          />
        </div>
        <div>
          {/* <Select options={countryData} placeholder={"Tinh"}/> */}
          <Selector
            placeholder={toCities.length > 0 ? "Chọn quận huyện" : ""}
            label={"Quận huyện"}
            selected={selectedToCity}
            onSelected={handleToCityChange}
            data={toCities}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Typography.Title level={5}>
            Trọng lượng (Gram)<span className="text-red">*</span>
          </Typography.Title>
          <Input className="h-10" defaultValue={0} />
        </div>
        <div>
          <Typography.Title level={5}>Tiền thu hộ (VNĐ)</Typography.Title>
          <Input className="h-10" defaultValue={0} />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          <Typography.Title level={5}>Hàng hóa khai giá (VNĐ)</Typography.Title>
          <Input className="h-10" defaultValue={0} />
        </div>
        <div className=" col-span-3">
          <Typography.Title level={5}>
            Kích thước (Dài x Rộng x Cao) (cm)
          </Typography.Title>

          <div className="grid grid-cols-3 gap-2">
            <Input className="h-10" defaultValue={0} />
            <Input className="h-10" defaultValue={0} />
            <Input className="h-10" defaultValue={0} />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-2">
        <Button type="primary" className="bg-red">
          Tra cứu
        </Button>
        <Button className="border-primary text-primary">
          Quy định và hàng hóa
        </Button>
      </div>
      <div className="text-center">
        Lưu ý: Cước phí ước tính chưa bao gồm phí phát ngoại tuyến, VAT và phụ
        phí xăng dầu
      </div>
    </div>
  );
};

export default FormOrder;
