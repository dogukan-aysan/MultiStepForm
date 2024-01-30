import Option from "./Option";
import Toggle from "./Toggle";
import styles from "./plan.module.css";
function Plan() {
  return (
    <div>
      <div className={styles.options}>
        <Option type="Arcade" price="9" isActive={true} />
        <Option type="Advanced" price="12" isActive={false} />
        <Option type="Pro" price="15" isActive={false} />
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
