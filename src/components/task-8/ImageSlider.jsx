import React, { useState } from "react";
import styles from "./styles.module.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevImage = () => {
    const isFirstImage = currentIndex === 0;
    const index = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };
  const goToNextImage = () => {
    const isLastImage = currentIndex === images.length - 1;
    const index = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `url(${images[currentIndex].url})`,
        }}
        className={styles.image}
      ></div>
      <button className={`${styles.prev_btn}`} onClick={goToPrevImage}>
        {"<"}
      </button>
      <button className={`${styles.next_btn}`} onClick={goToNextImage}>
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;
