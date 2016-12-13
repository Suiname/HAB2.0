import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LeagueComponent from './League';

class League extends React.Component {
  render() {
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
    username: state.username,
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(League);
