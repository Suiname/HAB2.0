import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from './Login';

class Login extends React.Component {
  loginFunction() {
    // TODO create action to replace this.
    console.log('placeholder');
  }
  render() {
    return (
      <LoginComponent loginFunction={this.props.loginFunction} />
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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
