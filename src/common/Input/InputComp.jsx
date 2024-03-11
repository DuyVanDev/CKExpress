import { Typography, Input } from "antd";
import React from "react";

const InputComp = ({ label, placeholder = "", type = "text", require = false, name="", text="", checked = false,className }) => {
  return (
    <div className={`mb-3 ${className}`}>
      {label && (
        <Typography.Title level={5}>
          <p className={`text-inherit flex items-center gap-2` }>{label} {require && <span className="text-red">(*)</span>}</p> 
        </Typography.Title>
      )}
      {type == "radio" ? (
        <div className="flex w-auto items-center gap-2">
          <Input type={type} checked={checked} className="w-10 h-6" placeholder={placeholder} name={name}/>
          <span className="text-md font-medium">{text}</span>
        </div>
      ) : (
        <div className="">
          <Input type={type} className="h-10" placeholder={placeholder} />
        </div>
      )}
    </div>
  );
};

export default InputComp;
