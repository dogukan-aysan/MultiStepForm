import { useContext } from "react";
import styles from "./Form.module.css";
import { Context } from "../../context/Context";

function Form() {
  const { dispatch, name, email, phone, nameError, mailError, phoneError } =
    useContext(Context);
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={`${styles.input} ${nameError ? styles.error : ""}`}
          type="text"
          id="name"
          placeholder="e.g Stephen King"
          value={name}
          onChange={(e) =>
            dispatch({ type: "updateName", payload: e.target.value })
          }
        />
        {nameError && <span className={styles.feedback}>{nameError}</span>}
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          className={`${styles.input} ${mailError ? styles.error : ""}`}
          type="text"
          id="email"
          placeholder="e.g stephenking@lorem.com"
          value={email}
          onChange={(e) =>
            dispatch({ type: "updateEmail", payload: e.target.value })
          }
        />
        {mailError && <span className={styles.feedback}>{mailError}</span>}
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          Phone Number
        </label>
        <input
          className={`${styles.input} ${phoneError ? styles.error : ""}`}
          type="text"
          id="phone"
          placeholder="e.g +1 234 567 890"
          value={phone}
          onChange={(e) =>
            dispatch({ type: "updatePhone", payload: e.target.value })
          }
        />
        {phoneError && <span className={styles.feedback}>{phoneError}</span>}
      </div>
    </form>
  );
}

export default Form;
