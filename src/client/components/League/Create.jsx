import React, { PropTypes } from 'react';

class CreateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.updateLeague = this.updateLeague.bind(this);
    this.submit = this.submit.bind(this);
    this.createLeague = this.props.createLeague;
    this.state = { leagueName: '', team1: '', maxPlayers: 0 };
  }
  update(value, key) {
    console.log("value: ", value);
    console.log("Key: ", key);
    this.setState((state) => {
      state[key] = value;
    });
  }
  submit() {
    console.log("State on submit: ", this.state);
    this.createLeague(this.state);
  }
  updateLeague(event) {
    event.preventDefault();
    console.log(event.target.value);
    const value = event.target.value;
    this.update(value, 'leagueName');
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
          <button className="button-primary formInput" onClick={this.submit} type="button">submit</button>
        </div>
      </div>
    );
  }
}

CreateComponent.propTypes = {
  createLeague: PropTypes.func,
};

export default CreateComponent;
