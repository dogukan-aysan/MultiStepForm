import styles from "./header.module.css";
function Header({ heading, text }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Header;
