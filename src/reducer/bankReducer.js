import {
  DEPOSIT_INTO_ACCOUNT,
  WITHDRAW_FROM_ACCOUNT,
  TOGGLE_INFO,
  AUTHENTICATION
} from "../constant/constants";
import update from "react-addons-update";
import { combineReducers } from "redux";
const initialState = {
  initialBalance: 0,
  redirectToReferrer: true,
  initialUI: {
    showExchange: false
  }
};
const balanceReducer = (state = initialState.initialBalance, action) => {
  switch (action.type) {
    case DEPOSIT_INTO_ACCOUNT:
      return state + parseFloat(action.amount);
    case WITHDRAW_FROM_ACCOUNT:
      return state - parseFloat(action.amount);
    default:
      return state;
  }
};
const uiReducer = (state = initialState.initialUI, action) => {
  switch (action.type) {
    case TOGGLE_INFO:
      return update(state, {
        showInfo: { $apply: currentState => !currentState }
      });
    default:
      return state;
  }
};

const authenticationReducer = (
  state = initialState.redirectToReferrer,
  action
) => {
  switch (action.type) {
    case AUTHENTICATION:
      return (state.redirectToReferrer = false);
    default:
      return state;
  }
};
const bankReducer = combineReducers({
  balance: balanceReducer,
  ui: uiReducer,
  auth: authenticationReducer
});
export default bankReducer;
