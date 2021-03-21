import PropTypes from "prop-types";
import "./styles.css";

const ArgumentWrapper = ({ children }) => {
  return <div className="container">{children}</div>;
};

ArgumentWrapper.propTypes = {
  children: PropTypes.node,
};

export default ArgumentWrapper;
