import { useGlobalState } from "@/hooks";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Loading from "@/components/Loading";

const NewsDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("title");
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;
  const data =
    Array.isArray(news) && news?.find((item) => item?.UrlDetail == paramValue);
  return (
    <div className="container py-4 max-md:px-3">
      <h1 className="text-5xl font-bold mb-4">{data?.NewsTitle}</h1>

      {!data ? (
        <Loading />
      ) : (
        <div className="text-md">
          {data && <p className="text-lg">{parse(data?.NewsContent)}</p>}
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
