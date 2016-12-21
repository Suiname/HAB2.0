import React, { PropTypes } from 'react';
import './style.css';

import logo from '../../_static/images/logo.png';

import bg from '../../_static/images/bkgd_baseballRightTop.jpg';
import grass from '../../_static/images/login_header_grass.jpg';

import CreateComponent from './Create';
import LeagueList from './List';

const style = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
};

const headerStyle = {
  backgroundImage: `url(${grass})`,
};

class LeagueComponent extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    console.log('Props: ', this.props);
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

              <h2><strong>Welcome back {this.props.loggedIn ? this.props.username : 'Person'}</strong></h2>
              <h4>Create a new league, draft for a league you&apos;ve been invited to or simulate a season for a league you&apos;ve already joined!</h4>
              {/* Create component goes here*/}
              <CreateComponent createLeague={this.props.createLeague} userID={this.props.userID} />
              <LeagueList />
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
  userID: PropTypes.string,
  createLeague: PropTypes.func,
};

export default LeagueComponent;
