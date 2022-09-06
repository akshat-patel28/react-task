import React from "react";
import styles from "./styles.module.css";

const CheckedItems = ({ checkedItems }) => {
  return (
    <div className={`${styles.sections}`}>
      <h3>checked Items</h3>
      {checkedItems.map((element, index) => (
        <p>{element}</p>
      ))}
    </div>
  );
};

export default CheckedItems;
