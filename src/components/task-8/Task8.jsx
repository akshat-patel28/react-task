import React from "react";
import ImageSlider from "./ImageSlider";

const images = [
  {
    url: "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "image1",
  },
  {
    url: "https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "image2",
  },
  {
    url: "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "image3",
  },
  {
    url: "https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "image4",
  },
  {
    url: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "image5",
  },
];

const Task8 = () => {
  return (
    <>
      <h1>Image slider</h1>
      <div style={{ width: "500px", height: "500px", margin: "20px auto" }}>
        <ImageSlider images={images} />
      </div>
    </>
  );
};

export default Task8;
