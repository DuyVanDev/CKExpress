import PropTypes from "prop-types";
import parse from "html-react-parser";


const About = () => {
  const data =
    "<div className='flex flex-col  gap-4'> <p>Khách hàng gửi trong khoảng thời gian từ trước 9giờ30 ngày hôm nay thì Người nhận của Quý khách sẽ nhận được trong khoảng thời gian từ 15giờ đến 24giờ cùng ngày.</p><div className='bg-white w-[167px] h-[165px] shadow-xl rounded-md   p-4 flex items-center text-center flex-col gap-4' ><img src='https://admin-netco.vps.vn//Image/ckfinder/images/Vector.png'/><h2 className='text-md  text-gray'> Chuyển phát tiêu chuẩn </div> <p>Nếu bạn có nhu cầu vận chuyển, nhận hàng đều đặn trong 1 khoảng thời gian cố định, dịch vụ Chuyển phát nhanh đặc biệt theo giờ sẽ là sự lựa chọn của bạn. Hàng hóa của doanh nghiệp bạn sẽ luôn được phát đúng giờ, an toàn với chi phí phải chăng.</p></div>";

  return (
    <div>
      <div className="bg-about p-8">
        <div className="container">
        <h2 className="text-center font-bold text-4xl text-primary">About Netco Post</h2>
        </div>
      </div>
      <div className="container">
        <div className="max-w-[900px]">{parse(data)}</div>
      </div>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
  headerImageOneLine: PropTypes.bool,
  headerImageTwoLine: PropTypes.bool,
  layoutCard: PropTypes.string,
  classNameCard: PropTypes.string,
};

About.defaultProps = {
  data: {},
};

export default About;
