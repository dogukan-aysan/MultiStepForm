import { useContext } from "react";
import Button from "../button/Button";

import styles from "./directions.module.css";
import { Context } from "../../context/Context";

function Directions() {
  const { currentStep } = useContext(Context);
  return (
    <section className={styles.directions}>
      {currentStep !== "step1" && <Button>Go Back</Button>}
      <Button>{currentStep === "step4" ? "Confirm" : "Next Step"}</Button>
    </section>
  );
}

export default Directions;
