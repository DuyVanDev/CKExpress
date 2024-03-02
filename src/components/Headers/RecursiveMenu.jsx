import React, { useMemo, useState } from "react";
import { data } from "./handleData";
import images from "@/config/images";
import { FormatDataMenu } from "@/utils/FormatDataMenu";
import { useGlobalState } from "@/hooks";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

const RecursiveMenu = () => {
  const { SubMenu } = Menu;
  const [globalState, dispatch] = useGlobalState();
  const { menu } = globalState;
  const location = useLocation();
  const menuHeader = menu.slice(0,16)

  const buildMenu = (menuItems, parentId = null) => {
    return menuItems
      .filter((item) => item.ParentId == parentId)
      .map((item) => {
        const hasChildren = menuItems.some(
          (child) => child.ParentId === item.Id
        );
        return hasChildren ? (
          <SubMenu
            className="bg-primary w-auto text-white font-medium text-md order-5"
            key={item.Id}
            title={<div className="flex items-center gap-2">{item.MenuName} <i className={`${item.IconClass}`}></i></div>}
          >
            {buildMenu(menuItems, item.Id)}
            
          </SubMenu>
        ) : (
          <Menu.Item className={`bg-primary text-white font-medium text-md ${item.MenuName == "Trang chủ" ? 'order-0' : 'order-9'} ${location.pathname == '/' &&  item.MenuUrl == ''  ? 'ant-menu-item-selected' : ''}`} key={item.Id}>
           <Link to={`/${item.MenuUrl || ''}`}> {item.MenuName} </Link>
          </Menu.Item>
        );
      });
  };

  return (
    <div className="flex bg-primary">
      <Menu className="bg-primary" mode="horizontal" disabledOverflow={true}>
        {buildMenu(menuHeader)}
      </Menu>
    </div>
  );
};

export default RecursiveMenu;
