import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "/styles/common/header/header.module.css";
import headerIcon from "../../../public/HeaderIcon.png";
import searchIcon from "../../../public/SearchIcon.png";
import cartIcon from "../../../public/CartIcon.png";
import menuBarIcon from "../../../public/MenuBarIcon.png";
import MenuBarIcon from "./menuBarIcon";
import MenuBar from "../mainBody/menubar/menuBar";

function Header() {
  return (
    <div>
      <div className={styles.headerMain}>
        <div className={styles.headerInner}>
          <div className={styles.headerNavWrapper}>
            <MenuBarIcon />
            <div className={styles.headerIconWrapper}>
              <Link href="/">
                <a>
                  <Image
                    src={headerIcon}
                    alt="headerIcon"
                    className={styles.headerIcon}
                  />
                </a>
              </Link>
            </div>
            <nav>
              <Link href="/">
                <a className={styles.link}>Home</a>
              </Link>
              <Link href="/Intelij/projects/front/pages/about">
                <a className={styles.link}>About</a>
              </Link>
            </nav>
          </div>
          <div className={styles.headerSearchBarWrapper}>
            <input
              className={styles.headerSearchBar}
              placeholder="Search ..."
            />
            <div className={styles.searchIconWrapper}>
              <Image
                src={searchIcon}
                alt="searchIcon"
                className={styles.searchIcon}
              />
            </div>
          </div>
          <div className={styles.userInfoWrapper}>
            <div className={styles.cartIconWrapper}>
              <Image src={cartIcon} alt="cartIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
