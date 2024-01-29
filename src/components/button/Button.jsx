import styles from "./button.module.css";

function Button({ children, bgColor, textColor }) {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <button
      className={styles.button}
      style={{ ...style, marginLeft: children === "Next Step" ? "auto" : "0" }}
    >
      {children}
    </button>
  );
}

export default Button;
