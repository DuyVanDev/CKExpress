import InputArea from "@/common/Input/InputArea";
import InputComp from "@/common/Input/InputComp";
import Selector from "@/common/Select/Selector";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { City, State } from "country-state-city";
import { useGlobalState } from "@/hooks";
import { ToastSuccess, ToastWaring } from "@/utils";
import { GROUPID, callApi } from "@/services";
import { ValidateEmail } from "@/utils/ValidateMail";

const FormSupport = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  const [states, setStates] = useState([]);
  const [checked, setChecked] = useState(false)
  const [selectedState, setSelectedState] = useState(null);


  useEffect(() => {
    const statesData = State.getStatesOfCountry("VN");
    setStates(statesData);
  }, []);
  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };

  const handleCheck = (e) => {
    setChecked(!checked)
    setSupport("Tư vấn / báo giá")
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(name == "" || phone == "" || email == "" ) {
      ToastWaring("Hãy nhập đầy đủ các thông tin")
      return
    }
    if(!ValidateEmail(email)) {
      ToastWaring("Hãy nhập email đúng định dạng")
      return;
    }
    Shop_spContact_Save()

    
  }

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  
  const [support, setSupport] = useState("");

  const Shop_spContact_Save = () => {
    (async () => {
      const pr = {
        Domain: "",
        Names: name,
        Phone: phone,
        KeySave : "Chăm sóc khách hàng",
        Support: support,
        Email: email,
        Content: content,
        GroupId: GROUPID,
      };

      console.log(pr)

      const params = {
        Json: JSON.stringify(pr),
        func: "Shop_spContact_Save",
      };
      try {
        const result = await callApi.Main(params);
        result?.length && result?.length > 0;
        if (result?.Status == "OK") {
          setPhone("");
          setContent("");
          setEmail("");
          setName("");
          ToastSuccess(result?.Result);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };

  

  return (
    <form onSubmit={handleSubmit}  className="p-8 flex flex-col gap-4 text-inherit">
      <h3 className="text-center text-xl font-medium">
        Thông tin hỗ trợ khách hàng
      </h3>
      <InputComp value={name} onChange={(e) => setName(e.target.value)} placeholder={"Nhập họ tên"} />
      <InputComp value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Nhập email"} />
      <InputComp type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={"Nhập số điện thoại"} />
      <Selector
        data={states}
        label={"Chọn khu vực của bạn"}
        placeholder={"Chọn khu vực"}
      />
      <InputComp
        label={"Bạn cần hỗ trợ gì ?"}
        type="radio"
        onChange={handleCheck}
        text="Tư vấn / báo giá"
        value={support}
        checked={checked}
      />
      
      <InputArea value={content} onChange={(e) => setContent(e.target.value)}
        placeholder={`${setting.CompanyName} có thể giúp gì cho bạn ? Hãy cho chúng tôi biết ...`}
      />
      <div className="w-12 mx-auto">
        <button type="submit" className="w-20 font-bold bg-red text-white rounded-md" >
          {" "}
          Gửi
        </button>
      </div>
    </form>
  );
};

export default FormSupport;
