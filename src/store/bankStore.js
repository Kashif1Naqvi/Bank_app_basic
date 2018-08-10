import { createStore, applyMiddleware } from "redux";
import bankReducer from "../reducer/bankReducer";
const logger = store => next => action => {
  console.log("dispatching an action", action);
  return next(action);
};

const bankStore = createStore(bankReducer, applyMiddleware(logger));
export default bankStore;
