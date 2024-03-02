import InputComp from "@/common/Input/InputComp";
import FormOrder from "@/components/FormOrder";
import { Button, Input, Select, Typography } from "antd";
import React from "react";

const EstimateTariff = () => {
  const { Option } = Select;
  const selectAfter = <Select></Select>;
  return (
    <div className="my-6 container">
      <FormOrder />
    </div>
  );
};

export default EstimateTariff;
