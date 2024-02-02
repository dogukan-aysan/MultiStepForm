import { useContext, useEffect, useMemo, useState } from "react";
import styles from "./summary.module.css";
import { Context } from "../../context/Context";

function Summary() {
  const { dispatch, billing, totalPrice, selectedPlan, planOptions, addOns } =
    useContext(Context);

  const [barePrice, setBarePrice] = useState(9);

  const selectedAddOns = useMemo(
    () => addOns.filter((option) => option.isSelected),
    [addOns]
  );

  useEffect(() => {
    let price;

    for (let option of planOptions) {
      if (option.name === selectedPlan) {
        price = option.price;
        setBarePrice(option.price);
      }
    }

    // Add selected add-on's price to the bare price
    price += selectedAddOns.reduce((acc, curr) => (acc += curr.price), 0);

    dispatch({
      type: "updatePrice",
      payload: billing === "monthly" ? price : price * 10,
    });
  }, [selectedPlan, selectedAddOns, billing, dispatch, planOptions]);

  const barePriceTag =
    billing === "monthly" ? `$${barePrice}/mo` : `$${barePrice * 10}/yr`;

  return (
    <section className={styles["price-table"]}>
      <header className={styles.header}>
        <div className={styles.plan}>
          <span className={styles.type}>
            {selectedPlan} ({billing === "montly" ? "Monthly" : "Yearly"})
          </span>
          <span
            className={styles.change}
            onClick={() => dispatch({ type: "toggleBilling" })}
          >
            Change
          </span>
        </div>
        <span className={styles["bare-price"]}>{barePriceTag}</span>
      </header>
      {selectedAddOns.length > 0 && (
        <div className={styles.body}>
          {selectedAddOns.map((option, i) => (
            <div key={i} className={styles["additional-cost"]}>
              <span>{option.title}</span>
              <span className={styles.price}>{`+$${
                billing === "monthly"
                  ? option.price + "/mo"
                  : option.price * 10 + "/yr"
              }`}</span>
            </div>
          ))}
        </div>
      )}
      <footer className={styles.footer}>
        <span>Total (per {billing === "montly" ? "month" : "year"})</span>
        <span className={styles["total-price"]}>{`+$${totalPrice}/${
          billing === "monthly" ? "mo" : "yr"
        }`}</span>
      </footer>
    </section>
  );
}

export default Summary;
