import React, { useEffect, useState } from "react";

const list = ["Ani", "Sam", " Joe", "Apple", "Banana", "Orange"];
const Task1 = () => {
  const [data, setData] = useState(list);

  useEffect(() => {}, [data]);

  const filterData = (e) => {
    setData(
      list.filter((element) =>
        element.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      )
    );
  };
  return (
    <div>
      <h1> Search Filter</h1>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => filterData(e)}
      />
      {data.map((element) => (
        <div>{element}</div>
      ))}
    </div>
  );
};

export default Task1;
