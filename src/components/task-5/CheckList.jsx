import React from "react";
import styles from "./styles.module.css";

const CheckList = ({ list, checkedItems, setCheckedItems }) => {
  const changeHandler = (e) => {
    let list = [...checkedItems];
    if (e.target.checked) list = [...checkedItems, e.target.value];
    else list.splice(checkedItems.indexOf(e.target.value), 1);

    setCheckedItems(list);
  };
  return (
    <div className={`${styles.sections}`}>
      <h3>List of Items</h3>
      {list.map((element, index) => (
        <div key={index}>
          <input type="checkbox" value={element} onChange={changeHandler} />
          <span>{element}</span>
        </div>
      ))}
    </div>
  );
};

export default CheckList;
