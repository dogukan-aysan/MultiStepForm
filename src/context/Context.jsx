import { createContext } from "react";

import { useReducer } from "react";

import Plan from "../components/plan/Plan";
import AddOnList from "../components/addOns/AddOnList";
import Summary from "../components/summary/Summary";
import Form from "../components/form/Form";

const initialState = {
  steps: {
    step1: {
      title: "Your info",
      heading: "Personal info",
      text: "Please provide your name, email address, and phone number.",
      component: <Form />,
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
  planOptions: [
    {
      name: "Arcade",
      price: 9,
    },
    {
      name: "Advanced",
      price: 12,
    },
    {
      name: "Pro",
      price: 15,
    },
  ],
  selectedPlan: "Arcade",
  billing: "monthly",
  addOns: [
    {
      title: "Online Service",
      text: "Access to multiplayer games",
      price: 1,
      isSelected: false,
    },
    {
      title: "Larger Storage",
      text: "Extra 1TB of cloud save",
      price: 2,
      isSelected: false,
    },
    {
      title: "Customizable Profile",
      text: "Custom theme on your profile",
      price: 2,
      isSelected: false,
    },
  ],
  totalPrice: 9,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changeStep": {
      return { ...state, currentStep: action.payload };
    }
    case "complete": {
      return { ...state, isCompleted: true };
    }
    case "changePlan": {
      return { ...state, selectedPlan: action.payload };
    }
    case "toggleBilling": {
      return {
        ...state,
        billing: state.billing === "monthly" ? "yearly" : "monthly",
      };
    }
    case "toggleAddOn": {
      return {
        ...state,
        addOns: action.payload,
      };
    }
    case "updatePrice": {
      return {
        ...state,
        totalPrice: action.payload,
      };
    }
  }
};

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [
    {
      steps,
      currentStep,
      isCompleted,
      planOptions,
      selectedPlan,
      billing,
      addOns,
      totalPrice,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        steps,
        currentStep,
        isCompleted,
        planOptions,
        selectedPlan,
        billing,
        addOns,
        totalPrice,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
