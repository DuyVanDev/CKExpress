import { Typography, Input } from "antd";
import React from "react";

const InputComp = ({ value="",label, placeholder = "", type = "text", require = false, name="", text="", checked = false,className,onChange = () => {} }) => {
  return (
    <div className={`mb-3 ${className}`}>
      {label && (
        <Typography.Title level={5}>
          <p className={` flex items-center gap-2` }>{label} {require && <span className="text-red">(*)</span>}</p> 
        </Typography.Title>
      )}
      {type == "radio" ? (
        <div className="flex w-auto items-center gap-2">
          <Input value={value} onChange={onChange} type={type} checked={checked} className="w-10 h-6" placeholder={placeholder} name={name}/>
          <span className="text-md font-medium">{text}</span>
        </div>
      ) : (
        <div className="">
          <Input type={type} onChange={onChange} value={value} className="h-10" placeholder={placeholder} />
        </div>
      )}
    </div>
  );
};

export default InputComp;
