import AnotherServices from "@/components/AnotherServices";
import React from "react";
import parse from "html-react-parser"
import { useGlobalState } from "@/hooks";

const ExpressDeliveryIN = () => {
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;
  

  const data = Array.isArray(news) &&  news?.find(item => item.UrlDetail.replace(/[^\w\s]/gi, '').toLowerCase().split(" ").join("-") == "chuyen-phat-nhanh") 
  console.log(data)
  return (
    <div className="container">
      <div className="flex  gap-3 py-6">
        <div className="basis-9/12">
          {parse(data?.NewsContent)}
        </div>
        <div className="basis-3/12">
          <AnotherServices />
        </div>
      </div>
    </div>
  );
};

export default ExpressDeliveryIN;
