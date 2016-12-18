import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createLeague } from '../../actions';

class CreateComponent extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    console.log("Props: ", this.props);
    return (
      <div id="create_wrapper">
        <div className="header create">Create a new league and invite friends!</div>
        <div id="createLeague" className="inline" action="/league/create" method="post">
          <input id="league_name" className="formInput" value={this.props.leagueName} type="text" name="league_name" placeholder="League Name" />
          <input id="owner_one" className="formInput" type="text" value={this.props.team1} name="team1_owner" placeholder="Team 1 Owner" />
          <input id="max_players" className="formInput" type="text" name="max_players" value={this.props.maxPlayers} placeholder="Max Players" />
          <button className="button-primary formInput" type="button">submit</button>
        </div>
      </div>
    );
  }
}

CreateComponent.propTypes = {
  leagueName: PropTypes.string,
  team1: PropTypes.string,
  maxPlayers: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    leagueName: state.leagueState.leagueName || '',
    team1: state.leagueState.team1 || '',
    maxPlayers: state.leagueState.maxPlayers || 0,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createLeague }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComponent);
