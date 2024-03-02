import { useGlobalState } from "@/hooks";
import { IMAGES_DOMAIN } from "@/services";
import { FormatDateJsonPro } from "@/utils";
import { Button } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarNews = () => {
  const [globalState, dispatch] = useGlobalState();
  const location = useLocation();

  const { news } = globalState;
  const filterData = news?.filter(
    (item) =>
      item.Url == "huong-dan" ||
      item.Url == "hoat-dong" ||
      item.Url == "khuyen-mai"
  );
  const dataPromo = filterData.filter((item) => item.Url == "khuyen-mai");
  const dataTuto = filterData.filter((item) => item.Url == "huong-dan");
  const dataActi = filterData.filter((item) => item.Url == "hoat-dong");

  return (
    <div className="flex flex-col gap-4 ">
      {location.pathname != "/khuyen-mai" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xl font-medium">Khuyễn mãi</p>
            <Link
              to={"/khuyen-mai"}
              className="text-lightblue underline text-sm"
            >
              Xem thêm
            </Link>
          </div>
          {dataPromo?.slice(0, 2).map((item, index) => (
            <Link
              to={{
                pathname: "/chi-tiet-khuyen-mai",
                search: `?title=${item?.UrlDetail?.replace(/[^\w\s]/gi, "")
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`,
              }}
            >
              <div className="flex items-center gap-4 shadow-md rounded-md bg-white p-2 mb-3">
                <div className="min-w-[100px] h-[60px]">
                  <img
                    className="w-full h-full object-cover"
                    src={IMAGES_DOMAIN + item.ImageNews}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="uppercase font-medium text-sm">
                    {item.NewsTitle}
                  </p>
                  <p className="text-xs">{FormatDateJsonPro(item.CreateOn)}</p>
                </div>
              </div>
            </Link>
          ))}{" "}
        </div>
      )}

      {location.pathname != "/huong-dan" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xl font-medium">Hướng dẫn</p>
            <Link
              to={"/huong-dan"}
              className="text-lightblue underline text-sm"
            >
              Xem thêm
            </Link>
          </div>
          {dataTuto?.slice(0, 2).map((item, index) => (
            <Link
            to={{
              pathname: "/chi-tiet-huong-dan",
              search: `?title=${item?.UrlDetail?.replace(/[^\w\s]/gi, "")
                .toLowerCase()
                .split(" ")
                .join("-")}`,
            }}
          >
              <div className="flex items-center gap-4 shadow-md rounded-md bg-white p-2 mb-3">
                <div className="min-w-[100px] h-[60px]">
                  <img
                    className="w-full h-full object-cover"
                    src={IMAGES_DOMAIN + item.ImageNews}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="uppercase font-medium text-sm">
                    {item.NewsTitle}
                  </p>
                  <p className="text-xs">{FormatDateJsonPro(item.CreateOn)}</p>
                </div>
              </div>
            </Link>
          ))}{" "}
        </div>
      )}
      {location.pathname != "/hoat-dong" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xl font-medium">Hoạt động</p>
            <Link
              to={"/hoat-dong"}
              className="text-lightblue underline text-sm"
            >
              Xem thêm
            </Link>
          </div>
          {dataActi?.slice(0, 2).map((item, index) => (
            <Link
            to={{
              pathname: "/chi-tiet-hoat-dong",
              search: `?title=${item?.UrlDetail?.replace(/[^\w\s]/gi, "")
                .toLowerCase()
                .split(" ")
                .join("-")}`,
            }}
          >
              <div className="flex items-center gap-4 shadow-md rounded-md bg-white p-2 mb-3">
                <div className="min-w-[100px] h-[60px]">
                  <img
                    className="w-full h-full object-cover"
                    src={IMAGES_DOMAIN + item.ImageNews}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="uppercase font-medium text-sm">
                    {item.NewsTitle}
                  </p>
                  <p className="text-xs">{FormatDateJsonPro(item.CreateOn)}</p>
                </div>
              </div>
            </Link>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default SidebarNews;
