import React, { PropTypes } from 'react';
import logo from '../../_static/images/logo.png';

import bg from '../../_static/images/bkgd_baseballRightTop.jpg';
import grass from '../../_static/images/login_header_grass.jpg';

const style = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
};

const headerStyle = {
  backgroundImage: `url(${grass})`,
};

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.login = this.login.bind(this);
    this.loginFunction = this.props.loginFunction;
    this.logoutFunction = this.props.logoutFunction;
    this.passwordChange = this.passwordChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
  }
  login() {
    this.loginFunction(this.state);
  }
  passwordChange(event) {
    event.preventDefault();
    const value = event.target.value;
    this.setState((state) => {
      state.password = value;
    });
  }
  usernameChange(event) {
    event.preventDefault();
    const value = event.target.value;
    this.setState((state) => {
      state.username = value;
    });
  }
  render() {
    return (
      <div id="login_wrapper" style={style}>
        <div id="page_header" style={headerStyle}>
          <div id="container_logo">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="four columns" id="login_left_col">
              <div>
                <label htmlFor="login_name">Login</label>
                <input className="u-full-width" type="text" name="login_name" value={this.state.username} onChange={this.usernameChange} placeholder="Account Name" />
                <label htmlFor="login_password">Password</label>
                <input className="u-full-width" type="password" value={this.state.password} onChange={this.passwordChange} name="login_password" placeholder="Password" />
                <button className="button-primary u-full-width" className="login_button" onClick={this.login} >Login</button>
                <button className="button-primary u-full-width" className="logout_button" onClick={this.logoutFunction} >Logout</button>
              </div>

              <div>
                <label htmlFor="create_account_name">Create Account</label>
                <input className="u-full-width" type="text" name="regster_username" placeholder="Account Name" />
                <input className="u-full-width" type="password" name="register_password" placeholder="Password" />
                <button className="button-primary u-full-width" className="register_button" >Register</button>
              </div>
            </div>

            <div className="eight columns" id="login_right_col">
              <div className="welcome_message">
                <h1>Welcome to History at Bat!</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  loginFunction: PropTypes.func,
  logoutFunction: PropTypes.func,
  username: PropTypes.string,
  dispatch: PropTypes.func,
};

export default LoginComponent;
