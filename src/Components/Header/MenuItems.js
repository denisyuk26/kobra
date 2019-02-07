import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function MenuItems() {
  const links = ["home", "game"];
  const item = links.map((item, index) => (
    <li key={index} className={styles.menu_item}>
      <Link to={`${item}`}>{item}</Link>
    </li>
  ));
  return <ul>{item}</ul>;
}
