import React, { Component } from "react";
import MenuItems from "./MenuItems.js";
import styles from "./header.module.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header className={styles.app_header}>
          <MenuItems />
        </header>
      </div>
    );
  }
}
export default Header;
