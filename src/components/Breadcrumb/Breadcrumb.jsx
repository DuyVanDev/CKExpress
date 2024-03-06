import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { useGlobalState } from "@/hooks";
import { Shop_spWeb_Menu_List } from "@/data/menu/Menu";

const Breadcrumb = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [globalState, dispatch] = useGlobalState();

  const pathName = location.pathname?.replace("/", "");
  const searchParam = queryParams.get("title");
  const { menu, news } = globalState;

  const link = menu.find((item) => item?.MenuUrl == pathName);
  console.log(link)
  const detail =
    searchParam &&
    Array.isArray(news) &&
    news?.find((item) => item?.UrlDetail == searchParam);
  return (
    <>
      <nav className="container max-md:px-3">
          {(searchParam || pathName != "") && (
            <div className="flex items-center ">
              <Link
                className="flex items-center justify-between gap-3 text-start  py-3 pr-3 text-[15px] font-medium leading-8 whitespace-nowrap"
                to={"/"}
              >
                Trang chủ
              </Link>
              {detail?.ParentMenuId == 1418 && (
                <Link
                  to={"/khuyen-mai"}
                  className="flex items-center gap-2 mr-2"
                >
                  <RightOutlined />
                  <p className="text-transparent bg-clip-text bg-title-gradient">
                    Khuyễn mãi
                  </p>
                </Link>
              )}
              {detail?.ParentMenuId == 1420 && (
                <Link
                  to={"/huong-dan"}
                  className="flex items-center gap-2 mr-2"
                >
                  <RightOutlined />
                  <p className="text-transparent bg-clip-text bg-title-gradient">
                    Hướng dẫn
                  </p>
                </Link>
              )}
              {detail?.ParentMenuId == 1419 && (
                <Link
                  to={"/hoat-dong"}
                  className="flex items-center gap-2 mr-2"
                >
                  <RightOutlined />
                  <p className="text-transparent bg-clip-text bg-title-gradient">
                    Hoạt động
                  </p>
                </Link>
              )}
              {link && (
                <span className="flex items-center gap-2 mr-2">
                  <RightOutlined />
                  <p className="text-transparent bg-clip-text bg-title-gradient">
                    {link?.MenuName}
                  </p>
                </span>
              )}
              {searchParam && (
                <span className="flex items-center gap-2">
                  <RightOutlined />{" "}
                  <p className="text-transparent bg-clip-text bg-title-gradient">
                    {detail?.NewsTitle}
                  </p>
                </span>
              )}
            </div>
          )}
        </nav>
    </>
  );
};

export default Breadcrumb;
