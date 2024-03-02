import AnotherServices from "@/components/AnotherServices";
import { useGlobalState } from "@/hooks";
import parse from "html-react-parser";

import React from "react";
import { useLocation, useParams } from "react-router-dom";

const CommonPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("title");
  console.log(paramValue);
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;
  

  const data = Array.isArray(news) &&  news?.find(item => item.UrlDetail.replace(/[^\w\s]/gi, '').toLowerCase().split(" ").join("-") == paramValue) 
   return (
    <div className="container bg-background">
      <div className="flex  gap-6 p-6 max-md:flex-col">
        <div className="basis-9/12">
          <div className="w-[90%]">
          {data && parse(data?.NewsContent)}
          </div>
        </div>
        <div className="basis-3/12">
          <AnotherServices />
        </div>
      </div>
    </div>
  );
};

export default CommonPage;
