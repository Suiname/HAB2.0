import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import LoginComponent from './Login';

class Login extends React.Component{
  render(){
    return (
      <LoginComponent />
    );
  }
}

Login.propTypes = {
  //TODO propTypes
};

function mapStateToProps(state) {
  //TODO return correct state
  return {
  };
}

function mapDispatchToProps(dispatch) {
  // TODO implement dispatch
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
