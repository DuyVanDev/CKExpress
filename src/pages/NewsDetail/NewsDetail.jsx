import { useGlobalState } from "@/hooks";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Loading from "@/components/Loading";
import AnotherServices from "@/components/AnotherServices";

const NewsDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("title");
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;
  const data =
    Array.isArray(news) && news?.find((item) => item?.UrlDetail == paramValue);
    console.log(data)
    const restData = data &&  news?.filter(item => item?.ParentMenuId == data?.ParentMenuId && item?.NewsId != data?.NewsId) 
  return (
    <div className="container py-4 max-md:px-4">
      <h1 className="text-5xl font-bold mb-4">{data?.NewsTitle}</h1>

      {!data ? (
        <Loading />
      ) : (
        <div className=" flex gap-8 max-md:flex-col">
          {data && <div className="text-lg basis-8/12">{parse(data?.NewsContent)}</div>}
         <div className="basis-4/12">
         <AnotherServices menuName={data?.MenuName} restData={restData}/>
         </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
