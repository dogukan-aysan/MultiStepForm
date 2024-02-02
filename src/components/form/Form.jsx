import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          placeholder="e.g Stephen King"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          className={styles.input}
          type="text"
          id="email"
          placeholder="e.g stephenking@lorem.com"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          Phone Number
        </label>
        <input
          className={styles.input}
          type="text"
          id="phone"
          placeholder="e.g +1 234 567 890"
        />
      </div>
    </form>
  );
}

export default Form;
