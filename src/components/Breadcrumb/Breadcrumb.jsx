import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { data } from "../Headers/handleData";
import { RightOutlined } from "@ant-design/icons";

const Breadcrumb = () => {
  const [breadcrumbPath, setBreadcrumbPath] = useState([]);
  const location = useLocation();

  const findItemByMenuUrl = (menuUrl, items) => {
    // setBreadcrumbPath([]);
    for (const item of items) {
      if (menuUrl == "/") {
        setBreadcrumbPath([]);
      }
      if (item.children.length > 0) {
        findItemByMenuUrl(menuUrl, item.children);
      }
      if (item.menuUrl === menuUrl) {
        setBreadcrumbPath(item);
        return;
      }
    }
    return null;
  };

  useEffect(() => {
    const pathSegments = location.pathname;
    findItemByMenuUrl(pathSegments, data);
  }, [location.pathname]);

  // useEffect(() => {
  //   setBreadcrumbPath(foundItems);
  //   console.log(breadcrumbPath);
  // }, [breadcrumbPath]);

  return (
    <nav className="container">
      {Object.values(breadcrumbPath).length > 0 && (
        <div className="flex">
          <Link
            className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-medium leading-8 whitespace-nowrap"
            to={"/"}
          >
            Home <RightOutlined />
          </Link>
          {breadcrumbPath?.label}
        </div>
      )}
    </nav>
  );
};

export default Breadcrumb;
