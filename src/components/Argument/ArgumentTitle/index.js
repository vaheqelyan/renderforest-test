import PropTypes from "prop-types";
import "./styles.css";

const ArgumentTitle = ({ title }) => (
  <div className="argumentTitle">
    <h3 className="m-auto white">{title}</h3>
  </div>
);

ArgumentTitle.propTypes = {
  title: PropTypes.string,
};

export default ArgumentTitle;
