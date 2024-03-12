import GoogleMap from "@/components/GoogleMap";
import Search from "antd/es/input/Search";
import React from "react";

const PostSystem = () => {
    const list = [
        // {
        //   post: "BƯU CỤC AN GIANG",
        //   phone: "0972727848",
        //   address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
        // },
        // {
        //   post: "BƯU CỤC AN GIANG",
        //   phone: "0972727848",
        //   address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
        // },
        // {
        //   post: "BƯU CỤC AN GIANG",
        //   phone: "0972727848",
        //   address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
        // },
        // {
        //   post: "BƯU CỤC AN GIANG",
        //   phone: "0972727848",
        //   address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
        // },
        // {
        //   post: "BƯU CỤC AN GIANG",
        //   phone: "0972727848",
        //   address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
        // },
        // {
        //   post: "BƯU CỤC AN GIANG",
        //   phone: "0972727848",
        //   address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
        // },
        // {
        //   post: "BƯU CỤC AN GIANG",
        //   phone: "0972727848",
        //   address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
        // },
        // {
        //   post: "BƯU CỤC AN GIANG",
        //   phone: "0972727848",
        //   address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
        // },
        // {
        //   post: "BƯU CỤC AN GIANG",
        //   phone: "0972727848",
        //   address: "111 Đường 9, Tây Khánh 2, Mỹ Hòa, Long Xuyên",
        // },
      ];
  return (
    <div className="flex container justify-center gap-4 py-10 max-lg:flex-col ">
      <div className="flex-1 flex flex-col  gap-4 bg-white p-4">
        <Search placeholder="Nhập tên bưu cục" enterButton className="px-3" />
        <div className="overflow-y-scroll h-[500px] ">
          <div className="px-3 flex flex-col gap-3">
            {list.map((item, index) => (
              <div
                key={index}
                className="flex  justify-between p-4 border-[1px] border-lightgray rounded-md bg-background cursor-pointer"
              >
                <div className="flex flex-col gap-2  ">
                  <p className="font-medium text-xl uppercase">
                    {index + 1}. {item.post}
                  </p>
                  <span className="flex items-center gap-2">
                    <img
                      src="https://netco.com.vn/assets/img/icon24/phone.png"
                      alt=""
                    />{" "}
                    <p>{item.phone}</p>
                  </span>
                  <span className="flex items-center gap-2">
                    <img
                      src="https://netco.com.vn/assets/img/icon24/location.png"
                      alt=""
                    />
                    <p>{item.address}</p>{" "}
                  </span>
                </div>
                <p className="text-primary">Xem đường đi</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <GoogleMap />
      </div>
    </div>
  );
};

export default PostSystem;
