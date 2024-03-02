import React from "react";
import parse, { Element, domToReact } from "html-react-parser";
import About from "@/components/About";
import InputComp from "@/common/Input/InputComp";
import { Button } from "antd";

const RegisterPartner = () => {
  const options = {
    replace: (node) => {
      if (node.type === "tag" && node.name === "img") {
        return (
          <p className="flex items-center justify-center">
            <img
              src={node.attribs.src}
              alt={node.attribs.alt}
              onClick={() => setIsOpen(true)}
            />
          </p>
        );
      }
      // Giữ nguyên các phần khác của content
      return node;
    },
  };
  const data =
    "<div className='flex flex-col  gap-4'><img src='https://admin-netco.vps.vn//Image/ckfinder/files/314861251_5596110927138119_4235452153117182872_n.jpg'/> <p>Khách hàng gửi trong khoảng thời gian từ trước 9giờ30 ngày hôm nay thì Người nhận của Quý khách sẽ nhận được trong khoảng thời gian từ 15giờ đến 24giờ cùng ngày.</p><div className='bg-white w-[167px] h-[165px] shadow-xl rounded-md   p-4 flex items-center text-center flex-col gap-4' ><img src='https://admin-netco.vps.vn//Image/ckfinder/images/Vector.png'/><h2 className='text-md  text-gray'> Chuyển phát tiêu chuẩn </div> <p>Nếu bạn có nhu cầu vận chuyển, nhận hàng đều đặn trong 1 khoảng thời gian cố định, dịch vụ Chuyển phát nhanh đặc biệt theo giờ sẽ là sự lựa chọn của bạn. Hàng hóa của doanh nghiệp bạn sẽ luôn được phát đúng giờ, an toàn với chi phí phải chăng.</p></div>";

  return (
    <div className="">
      <div className="p-4 container">
        <p className="text-4xl font-bold">Chuyển phát nhanh</p>
        <div className="max-w-[900px]">{parse(data, options)}</div>
      </div>
      <About />
      <div className="container p-6">
        <h3 className="uppercase text-3xl font-bold text-primary text-center mb-6">
          THÔNG TIN ĐĂNG KÝ ĐỐI TÁC THƯƠNG HIỆU
        </h3>
        <div className="p-8 bg-white">
          <div className="">
            <p className="text-primary text-xl font-medium mb-3">
              Thông tin đơn vị/cá nhân
            </p>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
              </div>
              <InputComp
                placeholder="Họ & tên"
                label={"Họ & tên"}
                type="file"
              />
            </div>
          </div>
          <hr className="border-dashed border-[1px] my-10 border-primary"/>
          <div>
            <p className="text-primary text-xl font-medium mb-3">
              Thông tin đơn vị/cá nhân
            </p>

            <div>
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
              
              <div className="grid grid-cols-3 gap-4">
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
                <InputComp placeholder="Họ & tên" label={"Họ & tên"} />
              </div>
              <InputComp
                placeholder="Họ & tên"
                label={"Họ & tên"}
                type="date"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">

          <Button danger type="primary">Đăng ký</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPartner;
