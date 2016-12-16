import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from './Login';
import { sendingRequest, loginRequest, logout, setAuthState, returningUser } from '../../actions';

class Login extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <LoginComponent loginFunction={this.props.loginRequest} logoutFunction={this.props.logout} onMount={this.props.returningUser} />
    );
  }
}

Login.propTypes = {
  // TODO propTypes
  loginRequest: PropTypes.func,
  logout: PropTypes.func,
  returningUser: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    loggedIn: state.appState.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendingRequest, loginRequest, logout, setAuthState, returningUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
