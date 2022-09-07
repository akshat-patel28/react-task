import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div>
      <ul className={`${styles.nav_links}`}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.inactive_link
          }
          to="/"
        >
          <li>task 1</li>
        </NavLink>
        <NavLink
          to="/task2"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.inactive_link
          }
        >
          <li>task 2</li>
        </NavLink>
        <NavLink
          to="/task3"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.inactive_link
          }
        >
          <li>task 3</li>
        </NavLink>
        <NavLink
          to="/task4"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.inactive_link
          }
        >
          <li>task 4</li>
        </NavLink>
        <NavLink
          to="/task5"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.inactive_link
          }
        >
          <li>task 5</li>
        </NavLink>
        <NavLink
          to="/task6"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.inactive_link
          }
        >
          <li>task 6</li>
        </NavLink>
        <NavLink
          to="/task7"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.inactive_link
          }
        >
          <li>task 7</li>
        </NavLink>
        <NavLink
          to="/task8"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.inactive_link
          }
        >
          <li>task 8</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
