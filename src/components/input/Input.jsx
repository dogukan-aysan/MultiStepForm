import styles from "./input.module.css";

function Input({ label, placeholder }) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        type="text"
        placeholder={"e.g. " + placeholder}
      />
    </div>
  );
}

export default Input;
