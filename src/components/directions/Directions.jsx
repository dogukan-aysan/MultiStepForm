import Button from "../button/Button";

import styles from "./directions.module.css";

function Directions() {
  return (
    <section className={styles.directions}>
      {true && (
        <Button bgColor="hsl(231, 100%, 99%)" textColor="grey">
          Go Back
        </Button>
      )}
      <Button bgColor="hsl(213, 96%, 18%)" textColor="hsl(217, 100%, 97%)">
        Next Step
      </Button>
    </section>
  );
}

export default Directions;
