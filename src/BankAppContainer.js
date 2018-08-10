import React, { Component } from "react";
import bankStore from "./store/bankStore";
import BankApp from "./BankApp";
import bankActionCreators from "./action/bankActionCreators";
import { connect } from "react-redux";
class BankAppContainer extends Component {
  render() {
    return (
      <div>
        <BankApp
          balance={bankStore.getState().balance}
          onDeposit={amount => {
            bankStore.dispatch(bankActionCreators.depositeIntoAccount(amount));
          }}
          onWithdraw={amount => {
            bankStore.dispatch(bankActionCreators.withdrawFromAccount(amount));
          }}
          onToggle={() => bankStore.dispatch(bankActionCreators.toggleInfo())}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    balance: state.balance,
    showExchange: state.ui.showExchange,
    redirectToReferrer: state.auth.redirectToReferrer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeposit: amount =>
      dispatch(bankActionCreators.depositeIntoAccount(amount)),
    onWithdraw: amount =>
      dispatch(bankActionCreators.withdrawFromAccount(amount)),
    onToggle: () => dispatch(bankActionCreators.toggleExchange()),
    authentication: () => dispatch(bankActionCreators.authenticationInfo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankAppContainer);
