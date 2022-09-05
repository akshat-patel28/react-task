import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, GET_POST } from "../helper/constant";

const Task7 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL + GET_POST)
      .then((res) => {
        if (res.status === 200) setData(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>Data From Rest API</h1>
      {data.map((element, index) => (
        <p key={index}>{element.title}</p>
      ))}
    </div>
  );
};

export default Task7;
