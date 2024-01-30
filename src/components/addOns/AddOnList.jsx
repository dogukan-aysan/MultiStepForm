import AddOn from "./AddOn";
import styles from "./addOns.module.css";

function AddOnList() {
  return (
    <div className={styles.addOnList}>
      <AddOn
        title="Online Service"
        text="Access to multiplayer games"
        price="1"
        isSelected={true}
      />
      <AddOn
        title="Larger Storage"
        text="Extra 1TB of cloud save"
        price="2"
        isSelected={true}
      />
      <AddOn
        title="Customizable Profile"
        text="Custom theme on your profile"
        price="2"
        isSelected={false}
      />
    </div>
  );
}

export default AddOnList;
