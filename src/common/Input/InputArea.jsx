import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

const InputArea = ({ placeholder, value = "", onChange = () => {} }) => (
  <TextArea
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    style={{
      height: 120,
      resize: "none",
    }}
  />
);
export default InputArea;
