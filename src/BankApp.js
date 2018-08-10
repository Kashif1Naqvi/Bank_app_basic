import React, { Component } from "react";
import PropTypes from "prop-types";
class BankApp extends Component {
  handleDeposit() {
    this.props.onDeposit(this.refs.amount.value);
    this.refs.amount.value = "";
  }
  handleWithdraw() {
    this.props.onWithdraw(this.refs.amount.value);
    this.refs.amount.value = "";
  }
  render() {
    return (
      <div>
        <header>
          <img
            src="//www.pro-react.com/logos/redux-bank.svg"
            alt="hello"
            width="150"
          />
        </header>
        <h1>your balance is ₨{this.props.balance.toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="enter amount" ref="amount" />
          <button onClick={this.handleWithdraw.bind(this)}> Withdraw </button>
          <button onClick={this.handleDeposit.bind(this)}>Deposite</button>
        </div>
        <div className="exchange" onClick={this.props.onToggle}>
          {console.log("hi", this.props.onToggle)}
          <strong>Exchange Rates:</strong>
          <div
            className={
              this.props.showExchange ? "exchange--visible" : "exchange--closed"
            }
          >
            {/* {console.log(
              "hello the showExchange is this:",
              this.props.showExchange
            )} */}
            <strong>$1 USD =</strong>
            <span className="rate">0.9990 EUR</span>
            <span className="rate">0.7989 GBP</span>
            <span className="rate">710.15 JPY</span>
          </div>
        </div>
      </div>
    );
  }
}
BankApp.PropTypes = {
  showExchange: PropTypes.bool,
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func
};

export default BankApp;
