import React, { useState } from "react";
import styles from "./styles.module.css";

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const openAccordion = () => setActive(!active);
  return (
    <div className={`${styles.container}`} onClick={openAccordion}>
      <div className={`${styles.title_div}`}>
        <span>{title}</span>
        <span>{active ? "-" : "+"}</span>
      </div>
      <div className={`${styles.content_div} ${active ? styles.active : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
