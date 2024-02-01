import styles from "./ThankYouMessage.module.css";
function ThankYouMessage() {
  return (
    <section className={styles.container}>
      <img src="/src/assets/images/icon-thank-you.svg" />
      <h1 className={styles.heading}>Thank you!</h1>
      <p className={styles.text}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
}

export default ThankYouMessage;
