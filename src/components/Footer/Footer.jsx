import { useGlobalState } from "@/hooks";
import { IMAGES_DOMAIN } from "@/services";
import { RemoveAccents } from "@/utils/RemoveAccents";
import { RightOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting, menu } = globalState;
  const menuFooter = menu.slice(16, menu?.length - 1);
  const menuMap = {};

  menuFooter.forEach((item) => {
    if (!item.ParentId) {
      // Nếu không có parentId, tạo thẻ title
      menuMap[item.Id] = { MenuName: item.MenuName, items: [] };
    } else {
      // Nếu có parentId, kiểm tra xem có thẻ title nào tương ứng không
      const parentTitle = menuMap[item.ParentId];
      if (parentTitle) {
        // Nếu có, thêm thẻ li vào cùng chỗ với title
        parentTitle.items.push(item);
      } else {
        // Nếu chưa có thẻ title, tạo mới và thêm thẻ li vào
        menuMap[item.ParentId] = {
          title: item.ParentMenuName,
          items: [item],
        };
      }
    }
  });

  // Chuyển đối tượng thành mảng để render
  const menuItems = Object.values(menuMap);

  return (
    <div className=" bg-footer bg-no-repeat bg-top  bg-cover w-full ">
      <div className="bg-primary flex flex-col p-4 max-md:px-4">
        <div className=" w-full z-30">
          <Card className=" bg-transparent container  border-0">
            <div className="grid grid-cols-4 max-md:grid-cols-1">
              {menuItems.map((menu, index) => (
                <div key={index} style={{ flex: "0 0 25%" }}>
                  <h2 className="text-secondary text-xl font-medium">
                    {menu.MenuName}
                  </h2>
                  <List
                    dataSource={menu.items}
                    renderItem={(item) => (
                      <li className="mt-3 text-lg text-white !hover:text-green">
                        <i className="fa-solid fa-angle-right"></i>{" "}
                        <Link
                          className="text-inherit text-md font-medium"
                          to={{
                            pathname: `/${RemoveAccents(
                              menu.MenuName.split(" ").join("-").toLowerCase()
                            )}`,
                            search: `?title=${item?.MenuUrl}`,
                          }}
                        >
                          {item.MenuName}
                        </Link>
                      </li>
                    )}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* bottom */}
        <div className=" ">
          {/* bottom top */}
          <div className="container grid lg:grid-cols-4  text-white py-6 gap-4  ">
            <div className="flex flex-col items-start gap-2 col-span-2 max-md:col-span-1">
              <p className="font-medium text-secondary text-lg mb-3">
                Trung tâm dịch vụ viễn thông - Chi nhánh tổng công ty Công nghệ
                - Viễn thông toàn cầu
              </p>
              <ul>
                <li className="flex items-center justify-start gap-4 cursor-pointer hover:text-green">
                  <RightOutlined
                    className="text-greenlight font-bold"
                    style={{ fontSize: "16px", fontWeight: "400" }}
                  />
                  <a className="text-md font-medium">{setting.Address}</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-2 col-span-1">
              <p className="font-medium text-primary text-lg mb-3">
                Tổng đài hỗ trợ
              </p>
              <ul className="">
                <li className="flex gap-2 items-center mb-2">
                  <img
                    src="https://admin-netco.vps.vn//Image/ckfinder/images/Fill%201036(1).png"
                    alt=""
                  />
                  <p className="text-md font-medium">Email: {setting.Email}</p>
                </li>

                <li className="flex gap-2 items-center  mb-2">
                  <div className="w-5 h-4">
                    <img
                      className="w-full h-full object-contain"
                      src="https://admin-netco.vps.vn//Image/ckfinder/images/Fill%201036(1).png"
                      alt=""
                    />
                  </div>
                  {setting?.Hotline && (
                    <div>
                      <p className="text-md font-medium">Hotline</p>
                      <p>{setting?.Hotline}</p>
                    </div>
                  )}
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-2 col-span-1">
              <p className="font-medium text-primary text-lg mb-3">
                Kết nối với {setting?.CompanyName}
              </p>
              {setting?.CompanyName && (
                <img
                  className="w-[180px] h-[180px]"
                  src={`${IMAGES_DOMAIN + setting?.QRCode.slice(0, -1)}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
