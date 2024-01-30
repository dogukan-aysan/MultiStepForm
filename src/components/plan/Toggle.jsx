import styles from "./Toggle.module.css";

function Toggle() {
  return (
    <div className={styles.container}>
      <div className={`${styles.circle} ${false && styles.left}`}></div>
    </div>
  );
}

export default Toggle;
