import AnotherServices from "@/components/AnotherServices";
import { useGlobalState } from "@/hooks";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import parse from "html-react-parser"
import AnotherCareers from "@/components/AnotherCareers";
import moment from "moment"

const CareerDetail = () => {
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
        <h2 className="font-bold text-4xl mb-3">{data?.CarrerName}</h2>
        <div className="flex flex-col items-start gap-2">
          <div>
            <span className="font-semibold">Nơi làm việc: </span>  {data?.Location}
          </div>
          <div>
            <span className="font-semibold">Mức lương: </span> {data?.Salary}
          </div>
          <div>
            <span className="font-semibold">Hạn chót nhận hồ sơ: </span> {moment(data?.Deadline).format('DD/MM/YYYY')}
          </div>
          <Link to={{
            pathname : "/ung-tuyen",
            search : `?title=${data?.Url}`
          }} className="bg-primary rounded-sm hover:bg-secondary transition-all delay-75 px-2 py-1 text-white">Nộp đơn</Link>
        </div>
        <hr className="my-4" />

        <h2 className="text-primary font-semibold text-2xl mb-2">Phúc lợi</h2>
        <div className="flex items-center mb-3">
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-lg font-medium flex items-center gap-3"><i class="fa fa-medkit"></i>Bảo hiểm</span>
            <span className="text-lg font-medium flex items-center gap-3"><i class="fa fa-usd"></i> Thưởng</span>
            <span className="text-lg font-medium flex items-center gap-3"><i class="fa fa-graduation-cap"></i> Đào tạo</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-lg font-medium flex items-center gap-3"><i class="fa fa-plane"></i>Du lịch</span>
            <span className="text-lg font-medium flex items-center gap-3"><i class="fa fa-user-md"></i>Chăm sóc sức khỏe</span>
            <span className="text-lg font-medium flex items-center gap-3"><i class="fa fa-line-chart"></i>Tăng lương</span>
          </div>
        </div>

        <div>
            {data && <p >{parse(data?.CarrerContent)}</p>}
        </div>
      </div>
      <div className="basis-4/12">
        <AnotherCareers rest={rest}/>
      </div>
    </div>
  );
};

export default CareerDetail;
