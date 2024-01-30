import Step from "../step/Step";
import styles from "./steps.module.css";

function Steps() {
  return (
    <aside className={styles.steps}>
      <Step num="1" title="YOUR INFO" isActive={false} />
      <Step num="2" title="SELECT PLAN" isActive={false} />
      <Step num="3" title="ADD-ONS" isActive={true} />
      <Step num="4" title="SUMMARY" isActive={false} />
    </aside>
  );
}

export default Steps;
