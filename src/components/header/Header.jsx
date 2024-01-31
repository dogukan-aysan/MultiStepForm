import styles from "./header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Finishing up</h1>
      <p className={styles.text}>
        Double-check everything looks OK before confirming.
      </p>
    </div>
  );
}

export default Header;
