import InputArea from "@/common/Input/InputArea";
import InputComp from "@/common/Input/InputComp";
import { Button } from "antd";
import React from "react";
import FormSupport from "../FormSupport";
import { useGlobalState } from "@/hooks";

const Contact = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  return (
    <div className=" bg-contact bg-center bg-no-repeat bg-cover bg-hero text-white ">
      <div className="container flex items-center gap-4 max-md:flex-col p-5">
        <div className="flex-1 flex flex-col gap-2  max-md:hidden">
          <h3 className="text-6xl font-medium">
            Hãy để <span className="text-primary">{setting.CompanyName}</span> hỗ trợ bạn
          </h3>
          <span className="text-2xl">
            <p>{setting.Hotline}</p>
          </span>
        </div>
        <div className="bg-support flex-1 text-white w-full">
          <FormSupport />
        </div>
      </div>
    </div>
  );
};

export default Contact;
