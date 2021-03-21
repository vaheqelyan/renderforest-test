import { useCallback, useState } from "react";
import ArgumentGroup from "../components/Argument/ArgumentGroup";
import ArgumentHeader from "../components/Argument/ArgumentHeader";
import ArgumentTitle from "../components/Argument/ArgumentTitle";
import ArgumentWrapper from "../components/Argument/ArgumentWrapper";
import { uid } from "../helpers";

const ITEM = {
  LAST_INPUT: "LAST_INPUT",
  EDIT_INPUT: "EDIT_INPUT",
  NONE: "NONE",
};

const ITEM_PARENT = {
  PROS: "pros",
  CONS: "cons",
};

const GROUPS = ["pros", "cons"];

const ArgumentContainer = () => {
  const [list, setList] = useState([
    {
      value: "",
      parent: ITEM_PARENT.CONS,
      id: uid(),
      type: ITEM.LAST_INPUT,
    },
    {
      value: "",
      parent: ITEM_PARENT.PROS,
      id: uid(),
      type: ITEM.LAST_INPUT,
    },
  ]);

  const getItemById = useCallback(
    id => {
      return list.find(value => value.id === id);
    },
    [list],
  );

  const removeItem = (list, id) => list.filter(value => value.id !== id);

  const addItem = (list, item) => [...list, ...[item]];

  const setItemValue = (list, { inputValue, id }) => {
    return list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          value: inputValue,
          type: ITEM.NONE,
        };
      } else {
        return item;
      }
    });
  };

  const handleItemName = useCallback(
    (inputValue, id, groupName) => {
      const currentItem = getItemById(id);

      if (currentItem.type === ITEM.LAST_INPUT) {
        setList(prevList =>
          addItem(prevList, {
            parent: groupName,
            id: uid(),
            type: ITEM.LAST_INPUT,
            value: "",
          }),
        );
      }

      if (inputValue === "") {
        setList(prevList => removeItem(prevList, id));
        return;
      }

      setList(prevList => setItemValue(prevList, { inputValue, id }));
    },
    [getItemById],
  );

  return (
    <ArgumentWrapper>
      <ArgumentTitle title="Should i eat at McDonalds?" />
      <ArgumentHeader getArguments={GROUPS} />
      {GROUPS.map(value => (
        <ArgumentGroup
          groupName={value}
          list={list}
          handleItemName={handleItemName}
          key={value}
        />
      ))}
    </ArgumentWrapper>
  );
};

export default ArgumentContainer;
