import styles from "/styles/common/mainBody/mainBody.module.css";
import MainBodySlider from "./mainContent/mainBodySlider/mainBodySlider";
import MenuBar from "./menubar/menuBar";
import MainContent from "./mainContent/mainContent";
import React from "react";

function MainBody() {
  return (
    <div className={styles.mainBodyWrapper}>
      <MenuBar />
      <MainContent />
    </div>
  );
}

export default MainBody;
