import { useContext } from "react";
import styles from "./Option.module.css";
import { Context } from "../../context/Context";

function Option({ type, price, isActive }) {
  const { dispatch } = useContext(Context);
  return (
    <div
      className={`${styles.option} ${isActive ? styles.active : ""}`}
      onClick={() => {
        dispatch({ type: "changePlan", payload: type });
      }}
    >
      <img
        className={styles.icon}
        src={`/src/assets/images/icon-${type.toLowerCase()}.svg`}
      />
      <h3 className={styles.type}>{type}</h3>
      <span className={styles.price}>{price}</span>
    </div>
  );
}

export default Option;
