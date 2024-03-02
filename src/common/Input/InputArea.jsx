import React from 'react';
import {  Input } from 'antd';
const { TextArea } = Input;

const InputArea = ({placeholder}) => (
    <TextArea
      placeholder={placeholder}
      style={{
        height: 120,
        resize: 'none',
      }}
    />
);
export default InputArea;