import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from './Login';
import { sendingRequest, loginRequest, logout, setAuthState } from '../../actions';

class Login extends React.Component {
  loginFunction() {
    // TODO create action to replace this.
    console.log('placeholder');
  }
  render() {
    return (
      <LoginComponent loginFunction={this.loginFunction} />
    );
  }
}

Login.propTypes = {
  // TODO propTypes
  loginFunction: PropTypes.func,
};

function mapStateToProps(state) {
  // TODO return correct state
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  // TODO implement dispatch
  return bindActionCreators({ sendingRequest, loginRequest, logout, setAuthState }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
