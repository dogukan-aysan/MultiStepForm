import { useContext } from "react";
import styles from "./Toggle.module.css";
import { Context } from "../../context/Context";

function Toggle() {
  const { dispatch, billing } = useContext(Context);
  return (
    <div
      className={styles.container}
      onClick={() => dispatch({ type: "toggleBilling" })}
    >
      <div
        className={`${styles.circle} ${billing === "yearly" && styles.left}`}
      ></div>
    </div>
  );
}

export default Toggle;
