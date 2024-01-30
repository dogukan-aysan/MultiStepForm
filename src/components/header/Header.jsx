import styles from "./header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Select your plan</h1>
      <p className={styles.text}>
        You have the option of monthly or yearly billing.
      </p>
    </div>
  );
}

export default Header;
