import React from "react";

const Task3 = () => {
  const list = [
    { id: 1, title: "task1" },
    { id: 2, title: "task2" },
    { id: 3, title: "task3" },
    { id: 4, title: "task4" },
  ];
  return (
    <div>
      <h1>Display a list</h1>
      {list.map((element, index) => (
        <div
          key={index}
          style={{
            width: "80px",
            height: "40px",
            border: "1px solid black",
            margin: "0 auto",
          }}
        >
          <p>
            {element.id} - {element.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Task3;
