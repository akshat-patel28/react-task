import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Task4 = () => {
  const data = [
    {
      title: "paragraph 1",
      content:
        "A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush.",
    },
    {
      title: "paragraph 2",
      content:
        "A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush.",
    },
    {
      title: "paragraph 3",
      content:
        "A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush.",
    },
    {
      title: "paragraph 4",
      content:
        "A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush.",
    },
  ];

  const activeAccordion = [
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false },
  ];

  const openAccordion = (index) =>
    (activeAccordion[index].isActive = !activeAccordion[index].isActive);

  return (
    <div>
      <h1>Accordion</h1>
      {data.map((element, index) => (
        <div
          key={index}
          className={`${styles.container}`}
          onClick={() => openAccordion(index)}
        >
          <div className={`${styles.title_div}`}>
            <span>{element.title}</span>
            <span>{activeAccordion[index].isActive ? "-" : "+"}</span>
          </div>
          <div
            className={`${styles.content_div} ${
              activeAccordion[index].isActive ? styles.active : ""
            }`}
          >
            {element.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task4;
