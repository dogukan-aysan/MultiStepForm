import styles from "./header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Pick add-ons</h1>
      <p className={styles.text}>
        Add-ons help enhance your gaming experience.
      </p>
    </div>
  );
}

export default Header;
