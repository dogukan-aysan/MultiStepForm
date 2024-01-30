import { FaCheck } from "react-icons/fa6";
import styles from "./addOn.module.css";

function AddOn({ title, text, price, isSelected }) {
  return (
    <div className={`${styles.container} ${isSelected ? styles.selected : ""}`}>
      <div
        className={`${styles.checkbox} ${
          isSelected ? styles["checkbox--selected"] : ""
        }`}
      >
        {isSelected ? <FaCheck /> : ""}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.price}>+${price}/mo</div>
    </div>
  );
}

export default AddOn;
