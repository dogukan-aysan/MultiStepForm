import { FaCheck } from "react-icons/fa6";
import styles from "./addOn.module.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

function AddOn({ title, text, price, isSelected }) {
  const { dispatch, addOns } = useContext(Context);
  const handleToggleClick = () => {
    const updatedAddOns = addOns.map((option) => {
      if (option.title === title) {
        option.isSelected = !option.isSelected;
      }
      return option;
    });
    dispatch({ type: "toggleAddOn", payload: updatedAddOns });
  };
  return (
    <div className={`${styles.container} ${isSelected ? styles.selected : ""}`}>
      <div
        onClick={handleToggleClick}
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
      <div className={styles.price}>{price}</div>
    </div>
  );
}

export default AddOn;
