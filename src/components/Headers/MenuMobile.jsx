import { Drawer, Menu } from "antd";
import PropTypes from "prop-types";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import images from "@/config/images";

import { data, dataMobile } from "./handleData";

const MenuMobile = ({ open, onClose, innerWidth }) => {
 
  const renderMenuMobile = () => {
    return (
      <div>
        <Menu mode="inline" items={data} className="bg-gray text-md text-white font-medium overflow-hidden"  />
      </div>
    );
  };
  return (
    <div >
      <div className="flex items-center justify-between p-3 shadow-2xl bg-gray border-b border-white ">
        <a href="/">
          <img src={images.Logo} alt="logo" className="w-36" />
        </a>
        <MenuUnfoldOutlined
          onClick={() => {
            onClose(!open)
            console.log(open)
          }}
          className="text-[20px] text-white"
        />
      </div>
      <div
        open={open}
        closable={false}
        onClose={() => onClose(false)}
        className={`${open ? "h-auto" : "h-0 "} overflow-hidden transition-all delay-100`}
      >
        {renderMenuMobile()}
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
