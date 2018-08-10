import React from "react";
class Login extends React.Component {
  redirectToReferrer: false;

  login = () => {
    fakeAuth.authenticate(() => {
      this.props.redirectToReferrer;
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.props;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
export default Login;
