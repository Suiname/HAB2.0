import React, {PropTypes} from 'react'
import logo from '../../_static/images/logo.png';

class LoginComponent extends React.Component{
  render(){
    return (
    <div>
      <div id="page_header">
        <div id="container_logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="four columns" id="login_left_col">
            <form action="/" method="post">
              <label htmlFor="login_name">Login</label>
                <input className="u-full-width" type="text" name="login_name" placeholder="Account Name" />
                 <label htmlFor="login_password">Password</label>
                <input className="u-full-width" type="password" name="login_password" placeholder="Password" />
                <input className="button-primary u-full-width" type="submit" className="login_button" value="ENTER APP" />
            </form>

            <form action="/" method="post">
              <label htmlFor="create_account_name">Create Account</label>
              <input className="u-full-width" type="text" name="create_account_name" placeholder="Account Name" />
              <input className="u-full-width" type="password" name="create_account_password" placeholder="Password" />
              <input className="button-primary u-full-width" type="submit" className="login_button" value="CREATE ACCOUNT" />
            </form>
          </div>

          <div className="eight columns" id="login_right_col">
            <div className="welcome_message">
              <h1>Welcome to History at Bat!</h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

        </div>

      </div>
    </div>
    );
  }
}

export default LoginComponent
