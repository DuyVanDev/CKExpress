import AnotherServices from "@/components/AnotherServices";
import RelatedPost from "@/components/RelatedPost";
import Services from "@/components/Services";
import React from "react";

const CompanyProfile = () => {
  const data =
    "<div className='flex flex-col  gap-4'><p className='text-4xl font-bold'>Chuyển phát nhanh</p> <p>Khách hàng gửi trong khoảng thời gian từ trước 9giờ30 ngày hôm nay thì Người nhận của Quý khách sẽ nhận được trong khoảng thời gian từ 15giờ đến 24giờ cùng ngày.</p><div className='bg-white w-[167px] h-[165px] shadow-xl rounded-md   p-4 flex items-center text-center flex-col gap-4' ><img src='https://admin-netco.vps.vn//Image/ckfinder/images/Vector.png'/><h2 className='text-md  text-gray'> Chuyển phát tiêu chuẩn </div> <p>Nếu bạn có nhu cầu vận chuyển, nhận hàng đều đặn trong 1 khoảng thời gian cố định, dịch vụ Chuyển phát nhanh đặc biệt theo giờ sẽ là sự lựa chọn của bạn. Hàng hóa của doanh nghiệp bạn sẽ luôn được phát đúng giờ, an toàn với chi phí phải chăng.</p></div>";
  return (
    <div className="container">
      <div className="flex  gap-3 py-6">
        <div className="basis-9/12">
          <Services data={data}/>
        </div>
        <div className="basis-3/12">
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
