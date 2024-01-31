import styles from "./summary.module.css";

function Summary() {
  return (
    <section className={styles["price-table"]}>
      <header className={styles.header}>
        <div className={styles.plan}>
          <span className={styles.type}>Arcade (Monthly)</span>
          <span className={styles.change}>Change</span>
        </div>
        <span className={styles["bare-price"]}>+$9/mo</span>
      </header>
      <div className={styles.body}>
        <div className={styles["additional-cost"]}>
          <span>Online service</span>
          <span className={styles.price}>+$1/mo</span>
        </div>
        <div className={styles["additional-cost"]}>
          <span>Larger storage</span>
          <span className={styles.price}>+$2/mo</span>
        </div>
      </div>
      <footer className={styles.footer}>
        <span>Total (per month)</span>
        <span className={styles["total-price"]}>+$12/mo</span>
      </footer>
    </section>
  );
}

export default Summary;
