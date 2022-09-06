import React, { useEffect, useState } from "react";
import CheckedItems from "./CheckedItems";
import CheckList from "./CheckList";
import styles from "./styles.module.css";

const Task5 = () => {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("list") !== null) {
      setItemsList(JSON.parse(localStorage.getItem("list")));
    }
  }, []);

  const onClick = () => {
    const items = [...itemsList, item];
    localStorage.setItem("list", JSON.stringify(items));
    setItemsList(JSON.parse(localStorage.getItem("list")));
    setItem("");
  };
  return (
    <div>
      <h1>CheckList</h1>
      <div className={`${styles.container}`}>
        <div className={`${styles.sections}`}>
          <h3>add items</h3>
          <input
            type="text"
            value={item}
            placeholder="item"
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={onClick}>Add</button>
        </div>
        <CheckList
          list={itemsList}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
        <CheckedItems checkedItems={checkedItems} />
      </div>
    </div>
  );
};

export default Task5;
