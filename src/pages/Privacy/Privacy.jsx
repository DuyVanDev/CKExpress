import { useGlobalState } from "@/hooks";
import React from "react";
import parse from "html-react-parser";

const Privacy = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  console.log(setting.PrivacyPolicy);
  const options = {
    replace: (node) => {
      if (node.name === "img") {
        return (
          <p className="flex justify-center">
            <img src={node.attribs.src} alt={node.attribs.alt} />
          </p>
        );
      }

      // Giữ nguyên các phần khác của content
      return node;
    },
  };
  return (
    <div className="container">
      <div className="max-w-[900px]">{parse(setting?.PrivacyPolicy, options)}</div>
    </div>
  );
};

export default Privacy;
