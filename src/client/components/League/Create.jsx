import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createLeague } from '../../actions';

class CreateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.updateLeague = this.updateLeague.bind(this);
    this.state = { leagueName: '', team1: '', maxPlayers: 0 };
  }
  update(value, key, that) {
    console.log("value: ", value);
    console.log("Key: ", key);
    that.setState((state) => {
      state[key] = value;
    });
  }
  updateLeague(event) {
    event.preventDefault();
    console.log(event.target.value);
    const value = event.target.value;
    this.update(value, 'leagueName', this);
  }
  render() {
    console.log("Props in Create  : ", this.props);
    console.log("this.props.")
    return (
      <div id="create_wrapper">
        <div className="header create">Create a new league and invite friends!</div>
        <div id="createLeague" className="inline" action="/league/create" method="post">
          <input id="league_name" className="formInput" value={this.state.leagueName} onChange={this.updateLeague} type="text" name="league_name" placeholder="League Name" />
          <input id="owner_one" className="formInput" type="text" value={this.state.team1} name="team1_owner" placeholder="Team 1 Owner" />
          <input id="max_players" className="formInput" type="text" name="max_players" value={this.state.maxPlayers} placeholder="Max Players" />
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
  console.log("State: ", state);
  return {
    leagueName: state.leagueState.leagueName,
    team1: state.leagueState.team1,
    maxPlayers: state.leagueState.maxPlayers,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createLeague }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComponent);
