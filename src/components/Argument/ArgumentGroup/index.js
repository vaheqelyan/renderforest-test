import ArgumentItem from "../ArgumentItem";
import PropTypes from "prop-types";
import "./styles.css";

const ArgumentGroup = ({ list, groupName, handleItemName }) => {
  const getChilds = list.filter(value => value.parent === groupName);

  return (
    <div className="argumentGroup bg-white">
      {getChilds.map((value, index) => (
        <ArgumentItem
          key={value.id}
          item={value}
          index={index}
          getParent={groupName}
          handleNameChange={handleItemName}
        />
      ))}
    </div>
  );
};

ArgumentGroup.propTypes = {
  groupName: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  handleItemName: PropTypes.func,
};

export default ArgumentGroup;
