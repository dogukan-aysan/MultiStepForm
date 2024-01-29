import styles from "./header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Personal Info</h1>
      <p className={styles.text}>
        Please provide your name, email address, and phone number.
      </p>
    </div>
  );
}

export default Header;
