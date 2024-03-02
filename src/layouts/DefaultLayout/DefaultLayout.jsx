import Headers from "../../components/Headers/Headers";
import PropTypes from "prop-types";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Headers />
      <Breadcrumb />

      {children}
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
