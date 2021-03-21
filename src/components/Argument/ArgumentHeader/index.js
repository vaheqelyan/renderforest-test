import PropTypes from "prop-types";
import "./styles.css";

const ArgumentHeader = ({ getArguments }) => {
  return (
    <div className="argumentHeader bg-white">
      {getArguments.map(value => (
        <div className="argumentHeader__title" key={value}>
          <h3 className="m-auto">{value}</h3>
        </div>
      ))}
    </div>
  );
};

ArgumentHeader.propTypes = {
  getArguments: PropTypes.arrayOf(PropTypes.string),
};

export default ArgumentHeader;
