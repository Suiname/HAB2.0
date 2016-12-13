import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from './Login';
import { sendingRequest, loginRequest, logout, setAuthState } from '../../actions';

class Login extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <LoginComponent loginFunction={this.props.loginRequest} logoutFunction={this.props.logout} />
    );
  }
}

Login.propTypes = {
  // TODO propTypes
  loginRequest: PropTypes.func,
  logout: PropTypes.func,
};

function mapStateToProps(state) {
  console.log('State: ', state);
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendingRequest, loginRequest, logout, setAuthState }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
