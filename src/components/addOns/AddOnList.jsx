import { useContext } from "react";
import AddOn from "./AddOn";
import styles from "./addOns.module.css";
import { Context } from "../../context/Context";

function AddOnList() {
  const { addOns, billing } = useContext(Context);
  return (
    <div className={styles.addOnList}>
      {addOns.map((option, i) => (
        <AddOn
          key={i}
          title={option.title}
          text={option.text}
          price={
            billing === "monthly"
              ? `+$${option.price}/mo`
              : `+$${option.price * 10}/yr`
          }
          isSelected={option.isSelected}
        />
      ))}
    </div>
  );
}

export default AddOnList;
