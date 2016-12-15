import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LeagueComponent from './League';

class League extends React.Component {
  render() {
    console.log(`State at League render: ${this.state}`);
    if (!this.props) {
      return null;
    }
    return (
      <LeagueComponent username={this.props.username} loggedIn={this.props.loggedIn} />
    );
  }
}

League.propTypes = {
  username: PropTypes.string,
  loggedIn: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    username: state.appState.username,
    loggedIn: state.appState.loggedIn,
  };
}

export default connect(mapStateToProps)(League);
