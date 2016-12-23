import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeagueComponent from './League';
import { returningUser, createLeague, leagueList } from '../../actions';

class League extends React.Component {
  componentWillMount() {
    if (!this.props.username) {
      this.props.returningUser();
    } else if (this.props.leagues.length === 0) {
      this.props.leagueList(this.props.username);
    }
  }
  render() {
    console.log(`State at League render: ${this.state}`);
    if (!this.props) {
      return null;
    }
    return (
      <LeagueComponent username={this.props.username} loggedIn={this.props.loggedIn} createLeague={this.props.createLeague} userID={this.props.userID} leagueList={this.props.leagueList} leagues={this.props.leagues} />
    );
  }
}

League.propTypes = {
  username: PropTypes.string,
  userID: PropTypes.string,
  loggedIn: PropTypes.bool,
  returningUser: PropTypes.func,
  createLeague: PropTypes.func,
  leagueList: PropTypes.func,
  leagues: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    username: state.appState.username,
    userID: state.appState.userID,
    loggedIn: state.appState.loggedIn,
    leagues: state.leagueState.leagueList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ returningUser, createLeague, leagueList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(League);
