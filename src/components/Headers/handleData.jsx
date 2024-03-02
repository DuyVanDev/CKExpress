import images from "@/config/images";
import {
  PhoneOutlined,
  GiftOutlined,
  WechatOutlined,
  UserOutlined,
  FormOutlined,
  GlobalOutlined,
  CustomerServiceOutlined,
  SoundOutlined,
  BorderBottomOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
const dataTop = [
  {
    label: <img src={images.Logo} alt="" className="w-56" />,
    children: [],
  },
  {
    label: (
      <a
        href="https://ant.design"
        rel="noopener noreferrer"
        className="block py-2 px-3 text-black md:p-0"
      >
        Thời gian:{" "}
        <span className="text-primary font-medium">8:00 - 20:00</span>
      </a>
    ),
    children: [],
  },
  {
    label: (
      <a
        href="https://ant.design"
        rel="noopener noreferrer"
        className="block py-2 px-3 text-black md:p-0 "
      >
        Hotline:{" "}
        <span className="text-primary font-medium">
          19006463 - 024 38 356 356
        </span>
      </a>
    ),
    children: [],
  },
  {
    label: (
      <a
        href="#"
        rel="noopener noreferrer"
        className="block py-2 px-3 text-black md:p-0 "
      >
        Hỗ trợ
      </a>
    ),
    icon: <WechatOutlined className="text-black" />,
    children: [
      {
        label: (
          <div className="pt-1 px-3 w-full flex items-center gap-3">
            <img src={images.Contacts} alt="" className="w-10" />
            <a
              href="tel:18002078"
              rel="noopener noreferrer"
              className="block py-2 px-3 text-xl font-bold text-text-red md:p-0 hover:text-hover-tel"
            >
              02998888683
            </a>
          </div>
        ),
        children: [],
      },
      {
        label: (
          <div className="py-4 px-3 w-full flex items-center gap-3 cursor-default">
            <img src={images.User} alt="" className="w-10" />
            <span className="block py-2 px-3 text-xl font-bold text-heading md:p-0">
              TƯ VẤN ONLINE
            </span>
          </div>
        ),
        children: [],
      },
      {
        label: (
          <div className="py-4 px-3 w-full flex items-center justify-around">
            <a
              href={`https://zaloweb.me/`}
              rel="noopener noreferrer"
              className="block py-2 px-3 text-black md:p-0 "
            >
              <img
                src={images.Zalo}
                alt=""
                className={` h-full object-cover cursor-pointer w-14`}
              />
            </a>
            <a
              href={`https://www.facebook.com/`}
              rel="noopener noreferrer"
              className="block py-2 px-3 text-black md:p-0 "
            >
              <img
                src={images.Facebook}
                alt=""
                className={` h-full object-cover cursor-pointer w-14`}
              />
            </a>
          </div>
        ),
        children: [],
      },
    ],
    typeDropdown: "normal",
  },

  {
    label: (
      <Link
        to="/dang-ky"
        rel="noopener noreferrer"
        className="block py-2 px-3 text-black md:p-0 "
      >
        <Button className="border-primary text-primary">Đăng ký</Button>
      </Link>
    ),
    children: [],
  },
  {
    label: (
      <Link
        to="/dang-nhap"
        rel="noopener noreferrer"
        className="block py-2 px-3 text-black md:p-0 "
      >
        <Button type="primary" className="border-primary text-white bg-primary">
          Đăng nhập
        </Button>
      </Link>
    ),
    icon: <FormOutlined className="text-inherit" />,
    children: [],
  },
];

const data = [
  {
    label: (
      <span className="">
        <Link
          to={"/"}
          className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
        >
          Trang chủ
        </Link>
      </span>
    ),
    children: [],
  },
  {
    label: (
      <span className="">
        <a className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap ">
          Dịch vụ
        </a>
      </span>
    ),
    children: [
      {
        label: (
          <span className="">
            <Link className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap ">
              Vận chuyển trong nước
            </Link>
          </span>
        ),
        children: [
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-nhanh"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát nhanh
                </Link>
              </span>
            ),
            menuUrl: "/chuyen-phat-nhanh",
            children: [],
            level: 3,
          },
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-tieu-chuan"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát tiêu chuẩn
                </Link>
              </span>
            ),
            menuUrl: "/chuyen-phat-tieu-chuan",
            children: [],
            level: 3,
          },
        ],
        level: 2,
      },
      {
        label: (
          <span className="">
            <Link
              to="/chuyen-phat-nhanh"
              className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
            >
              Vận chuyển trong nước
            </Link>
          </span>
        ),
        children: [
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-nhanh"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát nhanh
                </Link>
              </span>
            ),
            menuUrl: "/chuyen",
            children: [],
            level: 3,
          },
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-tieu-chuan"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát tiêu chuẩn
                </Link>
              </span>
            ),
            menuUrl: "/chuyen-phat",
            children: [],
            level: 3,
          },
        ],
        level: 2,
      },
    ],
    level: 1,
  },
  {
    label: (
      <span className="">
        <a className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap ">
          Dịch vụ
        </a>
      </span>
    ),
    children: [
      {
        label: (
          <span className="">
            <Link className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap ">
              Vận chuyển trong nước
            </Link>
          </span>
        ),
        children: [
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-nhanh"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát nhanh
                </Link>
              </span>
            ),
            menuUrl: "/chuyen-phat-nhanh",
            children: [],
            level: 3,
          },
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-tieu-chuan"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát tiêu chuẩn
                </Link>
              </span>
            ),
            menuUrl: "/chuyen-phat-tieu-chuan",
            children: [],
            level: 3,
          },
        ],
        level: 2,
      },
      {
        label: (
          <span className="">
            <Link
              to="/chuyen-phat-nhanh"
              className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
            >
              Vận chuyển trong nước
            </Link>
          </span>
        ),
        children: [
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-nhanh"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát nhanh
                </Link>
              </span>
            ),
            menuUrl: "/chuyen",
            children: [],
            level: 3,
          },
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-tieu-chuan"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát tiêu chuẩn
                </Link>
              </span>
            ),
            menuUrl: "/chuyen-phat",
            children: [],
            level: 3,
          },
        ],
        level: 2,
      },
    ],
    level: 1,
  },{
    label: (
      <span className="">
        <a className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap ">
          Dịch vụ
        </a>
      </span>
    ),
    children: [
      {
        label: (
          <span className="">
            <Link className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap ">
              Vận chuyển trong nước
            </Link>
          </span>
        ),
        children: [
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-nhanh"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát nhanh
                </Link>
              </span>
            ),
            menuUrl: "/chuyen-phat-nhanh",
            children: [],
            level: 3,
          },
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-tieu-chuan"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát tiêu chuẩn
                </Link>
              </span>
            ),
            menuUrl: "/chuyen-phat-tieu-chuan",
            children: [],
            level: 3,
          },
        ],
        level: 2,
      },
      {
        label: (
          <span className="">
            <Link
              to="/chuyen-phat-nhanh"
              className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
            >
              Vận chuyển trong nước
            </Link>
          </span>
        ),
        children: [
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-nhanh"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát nhanh
                </Link>
              </span>
            ),
            menuUrl: "/chuyen",
            children: [],
            level: 3,
          },
          {
            label: (
              <span className="">
                <Link
                  to="/chuyen-phat-tieu-chuan"
                  className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
                >
                  Chuyển phát tiêu chuẩn
                </Link>
              </span>
            ),
            menuUrl: "/chuyen-phat",
            children: [],
            level: 3,
          },
        ],
        level: 2,
      },
    ],
    level: 1,
  },
  {
    label: (
      <span className="">
        <Link
          to={"/tuyen-dung"}
          className="flex items-center justify-between gap-3 text-start  p-3 text-[15px] font-bold  leading-8 whitespace-nowrap "
        >
          Tuyển dụng
        </Link>
      </span>
    ),
    children: [],
    menuUrl: "/tuyen-dung",
  },
];

const dataMobile = [
  {
    label: "Thiết kế website",
    key: "design",
    children: [
      {
        label: "Đăng Ký Tên Miền",
        key: "domain",
        children: [
          {
            label: "Đăng",
            key: "domain",
          },
        ],
      },
      {
        label: "Đăng Ký Tên Miền",
        key: "domain1",
      },
      {
        label: "Đăng Ký Tên Miền",
        key: "domain3",
      },
      {
        label: "Đăng Ký Tên Miền",
        key: "domain4",
      },
    ],
  },
  {
    label: "Dịch vụ website",
    key: "domain5",
    children: [
      {
        label: "Đăng Ký Tên Miền",
        key: "domain6",
      },
      {
        label: "Đăng Ký Tên Miền",
        key: "domain7",
      },
      {
        label: "Đăng Ký Tên Miền",
        key: "domain8",
      },
      {
        label: "Đăng Ký Tên Miền",
        key: "domain9",
      },
    ],
  },
  {
    label: "Dịch vụ marketing",
    key: "domain10",
    children: [
      {
        label: "Đăng Ký Tên Miền",
        key: "domain11",
      },
      {
        label: "Đăng Ký Tên Miền",
        key: "domain23",
      },
    ],
  },
  {
    label: "Phần mềm",
    key: "a",
    children: [
      {
        label: "Đăng Ký Tên Miền",
        key: "b",
      },
      {
        label: "Đăng Ký Tên Miền",
        key: "c",
      },
    ],
  },
  {
    label: "Thêm",
    children: [],
  },
];

export { dataTop, data, dataMobile };
