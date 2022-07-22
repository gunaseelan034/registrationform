import { createContext, useReducer } from "react";
import defaultContext from "./defaultcontext";

const AppContext = createContext();

let reducer = (state, action) => {
  console.log(state, action, 'in provider')
  switch (action.type) {
    case "reset":
      return defaultContext;
    case "setLang":
      return { ...state, siteLang: action.siteLang };
  }
};

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };
  console.log(state.name)

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
