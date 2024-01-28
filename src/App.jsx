import Content from "./components/content/Content";
import Directions from "./components/directions/Directions";
import Steps from "./components/steps/Steps";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Steps />
      <main>
        <Content />
        <Directions />
      </main>
    </div>
  );
}

export default App;
