import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeagueComponent from './League';
import { returningUser } from '../../actions';

class League extends React.Component {
  componentWillMount() {
    this.props.returningUser({ username: 'test' });
  }
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
  returningUser: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    username: state.appState.username,
    loggedIn: state.appState.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ returningUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(League);
