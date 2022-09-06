import React from "react";
import Accordion from "./Accordion";

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

  return (
    <div>
      <h1>Accordion</h1>
      {data.map((element, index) => (
        <Accordion
          title={element.title}
          content={element.content}
          key={index}
        />
      ))}
    </div>
  );
};

export default Task4;
