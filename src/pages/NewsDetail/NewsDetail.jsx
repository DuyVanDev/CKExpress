import { useGlobalState } from "@/hooks";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";

const NewsDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("title");
  console.log(paramValue);
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;
  const data =
    Array.isArray(news) &&
    news?.find(
      (item) =>
        item.UrlDetail.replace(/[^\w\s]/gi, "")
          .toLowerCase()
          .split(" ")
          .join("-") == paramValue
    );
  return (
    <div className="container py-8">
      {data && parse(data?.NewsContent)}
    </div>
  );
};

export default NewsDetail;
