import React, { useState } from "react";

const Task2 = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const increment = () => setCount(count + value);
  const decrement = () => setCount(count - value);
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <h3>{count}</h3>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            style={{ width: "80px", fontSize: "20px" }}
            onClick={decrement}
          >
            -
          </button>
          <div>
            increment / decrement Counter by:{" "}
            <select onChange={(e) => setValue(parseInt(e.target.value))}>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
          <button
            style={{ width: "80px", fontSize: "20px" }}
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task2;
