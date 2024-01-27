import Content from "./components/Content";
import Directions from "./components/Directions";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="app">
      <Steps />
      <main className="main">
        <Content />
        <Directions />
      </main>
    </div>
  );
}

export default App;
