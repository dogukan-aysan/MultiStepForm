import { useContext } from "react";
import styles from "./step.module.css";
import { Context } from "../../context/Context";

function Step({ num, step, isActive }) {
  const { dispatch, areInputsValid, isCompleted } = useContext(Context);
  const handleClick = () => {
    if (areInputsValid && !isCompleted)
      dispatch({ type: "changeStep", payload: `step${num}` });
  };
  return (
    <div className={styles.step}>
      <span
        className={`${styles.num} ${isActive ? styles.active : ""}`}
        onClick={handleClick}
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
