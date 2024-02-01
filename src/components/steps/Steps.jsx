import { useContext } from "react";
import Step from "../step/Step";
import styles from "./steps.module.css";
import { Context } from "../../context/Context";

function Steps() {
  const { steps, currentStep } = useContext(Context);
  return (
    <aside className={styles.steps}>
      {Object.keys(steps)?.map((step, i) => (
        <Step
          key={i}
          step={steps[step]}
          num={i + 1}
          isActive={step === currentStep ? true : false}
        />
      ))}
    </aside>
  );
}

export default Steps;
