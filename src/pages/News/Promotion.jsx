import AnotherServices from "@/components/AnotherServices";
import SidebarNews from "@/components/SidebarNews/SidebarNews";
import { useGlobalState } from "@/hooks";
import { IMAGES_DOMAIN } from "@/services";
import { FormatDateJsonPro } from "@/utils";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Promotion = () => {
  const location = useLocation();
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;
  const filterData = news?.length > 0 &&  news?.filter((item) => item.Url == location.pathname.replace("/",""));
  console.log(filterData)
  return (
    <div className="container">
      <div className="flex  gap-3 py-6">
        <div className="basis-8/12 ">
          <p className="text-4xl mb-3 font-medium">Khuyến mãi</p>

          <div className="grid grid-cols-2 gap-8">
          {filterData?.length > 0 &&
              filterData?.map((item, index) => (
                <Link to={{
                  pathname:"/chi-tiet-khuyen-mai",
                  search: `?title=${item?.UrlDetail?.replace(/[^\w\s]/gi, '').toLowerCase().split(" ").join("-")}`
                }}
                  key={item.NewsId}
                  className="shadow-md rounded-md  gap-4 w-full "
                >
                  <div className="w-full h-[200px] ">
                    <img
                      className="w-full h-full object-cover rounded-md"
                      src={IMAGES_DOMAIN + item?.ImageNews}
                      alt=""
                    />
                  </div>
                  <div className="p-3 flex flex-col gap-2 ">
                    <p className="text-md font-medium">{item.NewsTitle}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium">{FormatDateJsonPro(item.CreateOn)}</p>
                      <p className="text-xs font-medium content-end mt-auto">
                        Xem thêm
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="basis-4/12">
          <SidebarNews  />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
