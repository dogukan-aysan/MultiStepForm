import { useContext } from "react";
import { Context } from "../../context/Context";
import Header from "../header/Header";

function Content() {
  const { steps, currentStep } = useContext(Context);
  const { heading, text } = steps[currentStep];
  return (
    <section>
      <Header heading={heading} text={text} />
      {steps[currentStep].component}
    </section>
  );
}

export default Content;
