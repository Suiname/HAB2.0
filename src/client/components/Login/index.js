import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from './Login';
import { sendingRequest, loginRequest, logout, setAuthState } from '../../actions';

class Login extends React.Component {
  render() {
    return (
      <LoginComponent loginFunction={this.props.loginRequest} />
    );
  }
}

Login.propTypes = {
  // TODO propTypes
  loginFunction: PropTypes.func,
  loginRequest: PropTypes.func,
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
