import {
  WITHDRAW_FROM_ACCOUNT,
  DEPOSIT_INTO_ACCOUNT,
  TOGGLE_INFO,
  AUTHENTICATION
} from "../constant/constants";

const bankActionCreators = {
  depositeIntoAccount(amount) {
    return {
      type: DEPOSIT_INTO_ACCOUNT,
      amount: amount
    };
  },
  withdrawFromAccount(amount) {
    return {
      type: WITHDRAW_FROM_ACCOUNT,
      amount: amount
    };
  },
  toggleInfo() {
    return {
      type: TOGGLE_INFO
    };
  },
  authentication() {
    return {
      type: AUTHENTICATION
    };
  }
};

export default bankActionCreators;
