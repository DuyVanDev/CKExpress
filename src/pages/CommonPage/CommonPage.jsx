import AnotherServices from "@/components/AnotherServices";
import Loading from "@/components/Loading";
import { useGlobalState } from "@/hooks";
import parse from "html-react-parser";

import React from "react";
import { useLocation, useParams } from "react-router-dom";

const CommonPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("title");
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;


  const data =
    Array.isArray(news) && news?.find((item) => item.UrlDetail == paramValue);
  return (
    <div className="container ">
      <div className="flex  gap-6 pb-6 max-md:flex-col max-md:px-4">
        <div className="basis-9/12">
          <div className="w-[90%]">
            {!data ? (
              <Loading />
            ) : (
              <>
                <h2 className="text-5xl font-bold mb-4">{data?.NewsTitle}</h2>
                {parse(data?.NewsContent)}
              </>
            )}
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
