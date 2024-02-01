import { Context } from "./context/Context";
import { useContext } from "react";

import Content from "./components/content/Content";
import Directions from "./components/directions/Directions";
import Steps from "./components/steps/Steps";
import ThankYouMessage from "./components/thankYou/ThankYouMessage";

import styles from "./app.module.css";

function App() {
  const { isCompleted } = useContext(Context);
  return (
    <div className={styles.app}>
      <Steps />
      <main>
        {isCompleted ? (
          <ThankYouMessage />
        ) : (
          <>
            <Content />
            <Directions />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
