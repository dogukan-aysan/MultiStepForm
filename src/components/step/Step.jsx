import styles from "./step.module.css";

function Step({ num, title, isActive }) {
  return (
    <div className={styles.step}>
      <span className={`${styles.num} ${isActive ? styles.active : ""}`}>
        {num}
      </span>
      <div>
        <h5 className={styles.heading}>{`STEP ${num}`}</h5>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default Step;
