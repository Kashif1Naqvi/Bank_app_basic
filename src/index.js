import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BankAppContainer from "./BankAppContainer";
import registerServiceWorker from "./registerServiceWorker";
import bankStore from "./store/bankStore";
import { Provider } from "react-redux";
const store = bankStore;
ReactDOM.render(
  <Provider store={store}>
    <BankAppContainer />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
