import AnotherCareers from "@/components/AnotherCareers";
import { useGlobalState } from "@/hooks";
import moment from "moment";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import InputComp from "@/common/Input/InputComp";
import { ValidateEmail } from "@/utils/ValidateMail";
import { ToastSuccess, ToastWaring } from "@/utils";
import { GROUPID, callApi } from "@/services";

const Recruiment = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const [support, setSupport] = useState("");
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

  const Shop_spContact_Save = () => {
    (async () => {
      const pr = {
        Domain: "",
        Names: name,
        Phone: phone,
        Support: "Tuyển dụng",
        Email: email,
        GroupId: GROUPID,
      };

      console.log(pr);

      const params = {
        Json: JSON.stringify(pr),
        func: "Shop_spContact_Save",
      };
      try {
        const result = await callApi.Main(params);
        result?.length && result?.length > 0;
        if (result?.Status == "OK") {
          setPhone("");
          setEmail("");
          setName("");
          ToastSuccess(result?.Result);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("title");
  const [globalState, dispatch] = useGlobalState();
  const { career } = globalState;
  const data =
    Array.isArray(career) && career?.find((item) => item?.Url == paramValue);
  const rest =
    Array.isArray(career) && career?.filter((item) => item?.Url != paramValue);
  return (
    <div className="container flex gap-8">
      <div className="basis-8/12 bg-white rounded-md p-4">
        <h2 className="font-bold text-4xl mb-3">Nộp đơn ứng tuyển</h2>
        <div className="flex flex-col items-start gap-2">
          <span className="font-semibold text-xl text-primary">
            {data?.CarrerName}{" "}
          </span>

          <div>
            <span className="font-semibold">Nơi làm việc: </span>{" "}
            {data?.Location}
          </div>
          <div>
            <span className="font-semibold">Mức lương: </span> {data?.Salary}
          </div>
          <div>
            <span className="font-semibold">Hạn chót nhận hồ sơ: </span>{" "}
            {moment(data?.Deadline).format("DD/MM/YYYY")}
          </div>
        </div>
        <hr className="my-4" />

        <h2 className="text-primary font-semibold text-2xl mb-2 uppercase">
          Thông tin liên hệ của bạn
        </h2>
        <form onSubmit={handleSubmit} className="mb-3 text-black">
          <InputComp
          label={"Họ và tên"} require
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Nhập họ tên"}
          />
          <InputComp
            value={email}
            label={"Email"} require
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Nhập email"}
          />
          <InputComp
            type="number"
            label={"Số điện thoại"} require
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={"Nhập số điện thoại"}
          />
          <InputComp require label={"Hồ sơ của bạn"} type="file" />

          <button className="w-full flex items-center justify-center ">
            {" "}
            <p className="bg-primary text-white p-2 rounded-md">
              Ứng tuyển
            </p>{" "}
          </button>
        </form>
      </div>
      <div className="basis-4/12">
        <AnotherCareers rest={rest} />
      </div>
    </div>
  );
};

export default Recruiment;
