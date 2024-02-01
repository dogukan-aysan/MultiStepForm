import { createContext } from "react";

import { useReducer } from "react";

import Info from "../components/info/Info";
import Plan from "../components/plan/Plan";
import AddOnList from "../components/addOns/AddOnList";
import Summary from "../components/summary/Summary";

const initialState = {
  steps: {
    step1: {
      title: "Your info",
      heading: "Personal info",
      text: "Please provide your name, email address, and phone number.",
      component: <Info />,
    },
    step2: {
      title: "Select Plan",
      heading: "Select your plan",
      text: "You have the option of monthly or yearly billing.",
      component: <Plan />,
    },
    step3: {
      title: "Add-ons",
      heading: "Pick add-ons",
      text: "Add-ons help enhance your gaming experience.",
      component: <AddOnList />,
    },
    step4: {
      title: "Summary",
      heading: "Finishing up",
      text: "Double-check everything looks OK before confirming.",
      component: <Summary />,
    },
  },
  currentStep: "step1",
  isCompleted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changeStep": {
      return { ...state, currentStep: action.payload };
    }
    case "complete": {
      return { ...state, isCompleted: true };
    }
  }
};

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [{ steps, currentStep, isCompleted }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <Context.Provider value={{ steps, currentStep, isCompleted, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
