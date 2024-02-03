import { useContext } from "react";
import styles from "./Option.module.css";
import { Context } from "../../context/Context";

function Option({ type, price, isActive }) {
  const { dispatch, billing } = useContext(Context);
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
      <p className={styles.price}>{price}</p>
      {billing === "yearly" && <p className={styles.free}>2 months free</p>}
    </div>
  );
}

export default Option;
