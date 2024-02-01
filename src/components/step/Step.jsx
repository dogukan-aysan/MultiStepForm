import { useContext } from "react";
import styles from "./step.module.css";
import { Context } from "../../context/Context";

function Step({ num, step, isActive }) {
  const { dispatch } = useContext(Context);
  return (
    <div className={styles.step}>
      <span
        className={`${styles.num} ${isActive ? styles.active : ""}`}
        onClick={() => dispatch({ type: "changeStep", payload: `step${num}` })}
      >
        {num}
      </span>
      <div>
        <h5 className={styles.heading}>{`STEP ${num}`}</h5>
        <p className={styles.title}>{step.title}</p>
      </div>
    </div>
  );
}

export default Step;
