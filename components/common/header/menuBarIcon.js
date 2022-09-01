import Image from "next/image";
import styles from "/styles/common/header/header.module.css";
import menuBarIcon from "../../../public/MenuBarIcon.png";
import React from "react";

const menuBarClick = () => {};

function MenuBarIcon() {
  return (
    <div className={styles.headerMenuBarWrapper}>
      <Image
        src={menuBarIcon}
        alt="menuBarIcon"
        className={styles.menuBarIcon}
        onClick={menuBarClick()}
      />
    </div>
  );
}

export default MenuBarIcon;
