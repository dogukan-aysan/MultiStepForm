import { createContext } from "react";

import { useReducer } from "react";

import Plan from "../components/plan/Plan";
import AddOnList from "../components/addOns/AddOnList";
import Summary from "../components/summary/Summary";
import Form from "../components/form/Form";
import { validateEmail, validatePhone } from "../utils/validate";

const initialState = {
  steps: {
    step1: {
      title: "YOUR INFO",
      heading: "Personal info",
      text: "Please provide your name, email address, and phone number.",
      component: <Form />,
    },
    step2: {
      title: "SELECT PLAN",
      heading: "Select your plan",
      text: "You have the option of monthly or yearly billing.",
      component: <Plan />,
    },
    step3: {
      title: "ADD-ONS",
      heading: "Pick add-ons",
      text: "Add-ons help enhance your gaming experience.",
      component: <AddOnList />,
    },
    step4: {
      title: "SUMMARY",
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
  areInputsValid: false,
  name: "",
  email: "",
  phone: "",
  mailError: "",
  phoneError: "",
  nameError: "",
  nameIsValid: false,
  mailIsValid: false,
  phoneIsValid: false,
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
    case "updateName": {
      return {
        ...state,
        name: action.payload,
        nameIsValid: action.payload === "" ? false : true,
      };
    }
    case "updateEmail": {
      return {
        ...state,
        email: action.payload,
        mailIsValid:
          action.payload === ""
            ? false
            : validateEmail(action.payload)
            ? true
            : false,
      };
    }
    case "updatePhone": {
      return {
        ...state,
        phone: action.payload,
        phoneIsValid:
          action.payload === ""
            ? false
            : validatePhone(action.payload)
            ? true
            : false,
      };
    }
    case "resetErrorMessages": {
      return {
        ...state,
        nameError: "",
        mailError: "",
        phoneError: "",
        areInputsValid: true,
      };
    }
    case "updateErrorMessages":
      return {
        ...state,
        nameError: state.nameIsValid ? "" : "This field is required",
        mailError: state.mailIsValid
          ? ""
          : "Please provide a valid e-mail address",
        phoneError: state.phoneIsValid
          ? ""
          : "Please provide a valid phone number",
        areInputsValid:
          state.nameIsValid && state.mailIsValid && state.phoneIsValid,
      };
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
      name,
      email,
      phone,
      areInputsValid,
      nameError,
      mailError,
      phoneError,
      nameIsValid,
      mailIsValid,
      phoneIsValid,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const checkInputs = () => {
    if (!(nameIsValid && mailIsValid && phoneIsValid)) {
      dispatch({ type: "updateErrorMessages" });
      return false;
    } else {
      dispatch({ type: "resetErrorMessages" });
      return true;
    }
  };

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
        name,
        email,
        phone,
        areInputsValid,
        nameError,
        mailError,
        phoneError,
        checkInputs,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
