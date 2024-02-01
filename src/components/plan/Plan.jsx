import { useContext } from "react";
import Option from "./Option";
import Toggle from "./Toggle";
import styles from "./plan.module.css";
import { Context } from "../../context/Context";
function Plan() {
  const { planOptions, selectedPlan, billing } = useContext(Context);
  return (
    <div>
      <div className={styles.options}>
        {planOptions.map((option, i) => (
          <Option
            key={i}
            type={option.name}
            price={
              billing === "monthly"
                ? `$${option.price}/mo`
                : `$${option.price * 10}/yr`
            }
            isActive={selectedPlan === option.name ? true : false}
          />
        ))}
      </div>
      <div className={styles.toggleTime}>
        <span className={styles.selected}>Monthly</span>
        <Toggle />
        <span>Yearly</span>
      </div>
    </div>
  );
}

export default Plan;
