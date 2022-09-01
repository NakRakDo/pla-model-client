import styles from "/styles/common/mainBody/menuBar/menuBar.module.css";

function MenuBar() {
  const category = ["Aviation", "Ground", "Naval"];
  const names = ["America", "Germany", "Soviet"];

  return (
    <div className={styles.menuBar}>
      <ul className={styles.menuList}>
        {category.map((category) => (
          <li key={category}>
            {category}
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuBar;
