import { useGlobalState } from "@/hooks";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import AnotherServices from "@/components/AnotherServices";

const About = () => {
  const [globalState, dispatch] = useGlobalState();
  const location = useLocation();
  const { news } = globalState;
  const [ data , setData ] = useState();

  useEffect(() => {
    const result =
      Array.isArray(news) &&
      news?.find(
        (item) =>
          item.UrlDetail.replace(/[^\w\s]/gi, "")
            .toLowerCase()
            .split(" ")
            .join("-") == location.pathname.replace("/", "")
      );
      setData(result)
  },[]);
  return (
    <div className="container bg-background">
      <h2>
        {data?.NewsTitle}

        <div className="flex  gap-6 p-6 max-md:flex-col">
          <div className="basis-9/12">
            <div className="w-[90%]">{data && parse(data?.NewsContent)}</div>
          </div>
          <div className="basis-3/12">
            <AnotherServices />
          </div>
        </div>
      </h2>
    </div>
  );
};

export default About;
