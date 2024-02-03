import { useContext } from "react";
import styles from "./button.module.css";
import { Context } from "../../context/Context";

function Button({ children }) {
  const { currentStep, dispatch, checkInputs } = useContext(Context);
  const handleClick = () => {
    if (checkInputs()) {
      const lastChar = parseInt(currentStep[currentStep.length - 1]);
      const payload = `step${
        children === "Next Step" ? lastChar + 1 : lastChar - 1
      }`;
      children === "Confirm"
        ? dispatch({ type: "complete" })
        : dispatch({ type: "changeStep", payload: payload });
    }
  };
  return (
    <button
      className={`${styles.button} ${
        styles[
          children === "Go Back"
            ? "go-back"
            : children === "Next Step"
            ? "next-step"
            : "confirm"
        ]
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
