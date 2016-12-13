import React, { PropTypes } from 'react';
import './style.css';

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

class LeagueComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Props: ", this.props);
    return (
      <div id="league_wrapper" style={style}>
        <div id="page_header" style={headerStyle}>
          <div id="container_logo">
              <a href="/logout" style={{ color: 'rgb(11, 191, 19)', fontSize: '2rem', top: 20, position: 'relative', left: 5 }}><strong>LOG OUT</strong></a><br />
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="twelve columns">

              <h2><strong>Welcome back {this.props.loggedIn ? this.props.username : "Person"}</strong></h2>
              <h4>Create a new league, draft for a league you've been invited to or simulate a season for a league you've already joined!</h4>

              <div className="header create">Create a new league and invite friends!</div>
              <div id="createLeague" className="inline" action="/league/create" method="post">
                <input id="league_name" className="formInput" type="text" name="league_name" placeholder="League Name" />
                <input id="owner_one" className="formInput" type="text" name="team1_owner" placeholder="Team 1 Owner" />
                <input id="owner_two" className="formInput" type="text" name="team2_owner" placeholder="Team 2 Owner" />
                <button className="button-primary formInput" type="button">submit</button>
              </div>
              <div className="header notDrafted">You've been invited to draft in these leagues!</div>
              <div id="notDrafted">
              </div>
              <div className="header drafted">You're part of the following leagues</div>
              <div id="drafted">
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeagueComponent.propTypes = {
  loggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default LeagueComponent;
