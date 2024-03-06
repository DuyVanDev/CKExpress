import { Drawer, Menu } from "antd";
import PropTypes from "prop-types";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import images from "@/config/images";
import { useGlobalState } from "@/hooks";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const MenuMobile = ({ open, onClose, innerWidth }) => {
  const [globalState, dispatch] = useGlobalState();
  const location = useLocation();
  const { menu, setting } = globalState;
  const menuHeader = menu.slice(0, 16);
  const lg = [
    {
      title: "Tiếng Việt",
      img: images.VietNam,
    },
    {
      title: "English",
      img: images.EngLish,
    },
  ];
  const { SubMenu } = Menu;
  useEffect(() => {
    onClose(false);
  }, [location.pathname]);

  const buildMenu = (menuItems, parentId = null) => {
    return menuItems
      .filter((item) => item.ParentId == parentId)
      .map((item) => {
        const hasChildren = menuItems.some(
          (child) => child.ParentId === item.Id
        );
        return hasChildren ? (
          <SubMenu
            className=" w-auto !text-black font-medium text-md"
            key={item.Id}
            title={
              <div className="flex text-black justify-between items-center gap-2">
                {item.MenuName} <i className={`${item.IconClass}`}></i>
              </div>
            }
          >
            {buildMenu(menuItems, item.Id)}
          </SubMenu>
        ) : (
          <Menu.Item
            className={` text-black font-medium text-md  ${
              location.pathname == "/" && item.MenuUrl == ""
                ? "ant-menu-item-selected"
                : ""
            }`}
            key={item.Id}
          >
            <Link className="text-black" to={`/${item.MenuUrl || ""}`}>
              {" "}
              {item.MenuName}{" "}
            </Link>
          </Menu.Item>
        );
      });
  };

  return (
    <div>
      <div className="flex items-center justify-between p-3 shadow-2xl bg-gray border-b border-white ">
        <a href="/">
          <img src={setting?.Logo} alt="logo" className="w-36" />
        </a>
        <MenuUnfoldOutlined
          onClick={() => {
            onClose(!open);
          }}
          className="text-[20px] text-white"
        />
      </div>
      <div
        open={open}
        closable={false}
        onClose={() => onClose(false)}
        className={`${
          open ? "h-auto" : "h-0 "
        } overflow-hidden transition-all delay-100`}
      >
        <Menu className="" mode="inline" disabledOverflow={true}>
          {buildMenu(menuHeader)}
        </Menu>

        <div className=" flex flex-col  bg-white">
          {lg.map((item) => (
            <div className=" cursor-pointer hover:bg-lightgreen transition-all delay-100">
              <div className="px-7 py-3 flex items-center gap-3">
                <p>{item.title}</p>
                <div className="w-[30px] h-[20px]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MenuMobile.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  innerWidth: PropTypes.number.isRequired,
  scrollY: PropTypes.number.isRequired,
};

export default MenuMobile;
