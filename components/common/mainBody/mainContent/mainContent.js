import MainBodySlider from "./mainBodySlider/mainBodySlider";
import styles from "../../../../styles/common/mainBody/mainContent/mainContent.module.css";

function MainContent() {
  return (
    <div className={styles.mainContentWrapper}>
      <MainBodySlider />
    </div>
  );
}

export default MainContent;
