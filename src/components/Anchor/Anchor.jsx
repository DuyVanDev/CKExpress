import images from "@/config/images";
import React, {  useState } from "react";
import { Affix, Tooltip } from "antd";
import { useGlobalState } from "@/hooks";

const Anchor = () => {
  const [show, setShow] = useState(false);
  const [globalState] = useGlobalState();
  const { about } = globalState;
  const data = {
    label: (
        
          <img
            src={images.Help}
            alt=""
            className={`w-full h-full object-cover cursor-pointer p-2 border-2 rounded-full border-primary`}
          />
    ),
    child: [
      {
        label: (
          <Tooltip title={`Phone`} placement="left">
            <a
              href={`tel:${about.Hotline?.DataSetting}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 text-inherit md:p-0 hover:text-hover-text-white"
            >
              <img
                src={images.Phone}
                alt=""
                className={`w-full h-full object-cover cursor-pointer`}
              />
            </a>
          </Tooltip>
        ),
      },
      {
        label: (
          <Tooltip title={`Facebook`} placement="left">
            <a
              href={`facebook.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 text-inherit md:p-0 hover:text-hover-text-white"
            >
              <img
                src={images.FaceBook}
                alt=""
                className={`w-full h-full object-cover cursor-pointer`}
              />
            </a>
          </Tooltip>
        ),
      },
      {
        label: (
          <Tooltip title={`Zalo`} placement="left">
            <a
              href={`tel:${about.Zalo?.DataSetting}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 text-inherit md:p-0 hover:text-hover-text-white"
            >
              <img
                src={images.Zalo}
                alt=""
                className={`w-full h-full object-cover cursor-pointer`}
              />
            </a>
          </Tooltip>
        ),
      },
      
    ],
  };
  return (
    <Affix className="fixed bottom-10 right-10">
      <div className="" onMouseLeave={() => setShow(false)}>
        <div>
          <div className="flex flex-col gap-4 mb-4">
            {data.child?.map((itemSub, indexSub) => (
              <div
                key={indexSub}
                className={`w-[50px] h-[50px]
                ${show == true ? "visible" : "invisible"} 
                transition-all delay-100 `}
              >
                {itemSub.label}
              </div>
            ))}
          </div>
          <div
            onMouseOver={() => setShow(true)}
            className={`w-[60px] h-[60px] transition-all delay-100`}
          >
            {data.label}
          </div>
        </div>
      </div>
    </Affix>
  );
};

export default Anchor;
