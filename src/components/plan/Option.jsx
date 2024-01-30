import styles from "./Option.module.css";

function Option({ type, price, isActive }) {
  return (
    <div className={`${styles.option} ${isActive ? styles.active : ""}`}>
      <img
        className={styles.icon}
        src={`/src/assets/images/icon-${type.toLowerCase()}.svg`}
      />
      <h3 className={styles.type}>{type}</h3>
      <span className={styles.price}>{`$${price}/mo`}</span>
    </div>
  );
}

export default Option;
