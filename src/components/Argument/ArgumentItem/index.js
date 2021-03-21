import PropTypes from "prop-types";
import "./styles.css";

const ArgumentItem = ({ index, item, getParent, handleNameChange }) => {
  const { id, value } = item;
  return (
    <div className="listItem">
      <span className="listItem__number">{index + 1}.</span>
      <input
        className="listItem__input"
        key={id}
        type="text"
        value={value}
        onChange={e => handleNameChange(e.target.value, id, getParent)}
      />
    </div>
  );
};

ArgumentItem.propTypes = {
  index: PropTypes.number,
  getParent: PropTypes.string,
  handleNameChange: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default ArgumentItem;
