import { DownOutlined, PhoneOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";
import images from "@/config/images";
import { useGlobalState } from "@/hooks";
import { Link } from "react-router-dom";

const Info = () => {
  const [globalState, dispatch] = useGlobalState();
  const { menu, news } = globalState;
  const services =
    Array.isArray(news) &&
    news.filter(
      (item) => item?.MenuName == "Dịch vụ"
    );
  // const [indexTab, setIndexTab] = useState(0);
  const renderContent = () => {
    if (services.length > 0) {
      return (
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          {Array.isArray(services) && services?.map((item, index) => (
            <Link to={{
              pathname : "/dich-vu",
            search : `title=${item?.UrlDetail}`
            }}
              className={``}
              key={index}
            >
              <div
                className={`group bg-white w-[167px] h-[165px] rounded-md   p-4 flex items-center flex-col gap-4 cursor-pointer hover:bg-primary`}
              >
                <img className="w" src={"https://admin-netco.vps.vn//Image/ckfinder/images/Vector.png"} />
                <p className="group-hover:text-white text-sm text-center font-bold text-gray">
                  {item?.NewsTitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      );
    } 
  };
  return (
    <div className="bg-info py-4">
      <div className="container flex items-start justify-center gap-5   max-sm:px-2 max-md:px-2 pt-[100px] max-md:flex-col max-sm:flex-col ">
        <div className="basis-4/12">
          <div className="block float-left max-w-none">
            <img className=" w-[360px] h-[592px] " src={images.Bike} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4  basis-8/12 mt-6">
          <p className="text-4xl font-bold">
            <span className="text-primary">Đa dạng</span> dịch vụ vận chuyển
          </p>
          <div className="flex items-center ">
            {/* {Array.isArray(data.child) &&
          data?.child.map((item, index) =>{
            const last = data.child.length - 1;
            return (
              (
                <span
                  key={index}
                  className={`  text-lg px-4 cursor-pointer  uppercase font-bold ${
                    index === indexTab
                      ? ` decoration-4 relative after:content-[""]   after:absolute after:bottom-[-4px] after:h-[2px] after:bg-primary after:left-4 after:right-4 `
                      : "text-black  "
                  } ${index != last ? "border-r-2 ": " "}`}
                  
                  onClick={() => setIndexTab(index)}
                >
                  {item.title}
                </span>
              )
            )
          })} */}
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {};
Info.defaultProps = {};

export default Info;
