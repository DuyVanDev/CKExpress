import AnotherCareers from "@/components/AnotherCareers";
import { useGlobalState } from "@/hooks";
import moment from "moment";
import React from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import InputComp from "@/common/Input/InputComp";

const Recruiment = () => {
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
          <span className="font-semibold text-xl text-red">
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
            {moment(data?.Deadline).format("MM/DD/YYYY")}
          </div>
        </div>
        <hr className="my-4" />

        <h2 className="text-red font-semibold text-2xl mb-2 uppercase">
          Thông tin liên hệ của bạn
        </h2>
        <div className="mb-3 text-black">
          <InputComp require label={"Họ và tên"} placeholder="Nhập họ tên" />
          <InputComp require label={"Email"} placeholder="Nhập email" />

          <InputComp
            require
            label={"Số điện thoại"}
            placeholder="Nhập số điện thoại"
          />
          <InputComp require label={"Hồ sơ của bạn"} type="file" />
        </div>
      </div>
      <div className="basis-4/12">
        <AnotherCareers rest={rest} />
      </div>
    </div>
  );
};

export default Recruiment;
