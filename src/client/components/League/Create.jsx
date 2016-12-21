import React, { PropTypes } from 'react';

class CreateComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Create Props: ", props);
    this.update = this.update.bind(this);
    this.updateLeague = this.updateLeague.bind(this);
    this.submit = this.submit.bind(this);
    this.createLeague = this.props.createLeague;
    this.state = { leagueName: '', team1: props.userID, maxPlayers: 0 };
  }
  update(value, key) {
    this.setState((state) => {
      state[key] = value;
    });
  }
  ComponentDidUpdate(prevProps, prevState) {
    if (prevProps.userID !== this.props.userID) {
      this.state.team1 = this.props.userID;
    }
  }
  submit() {
    console.log('State on submit: ', this.state);
    this.createLeague(this.state);
    this.setState((state) => {
      state.leagueName = '';
      state.maxPlayers = 0;
    });
  }
  updateLeague(event) {
    event.preventDefault();
    const value = event.target.value;
    const id = event.target.id;
    switch (id) {
      case 'league_name':
        this.update(value, 'leagueName');
        break;
      case 'max_players':
        this.update(value, 'maxPlayers');
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div id="create_wrapper">
        <div className="header create">Create a new league and invite friends!</div>
        <div id="createLeague" className="inline" action="/league/create" method="post">
          <input id="league_name" className="formInput" value={this.state.leagueName} onChange={this.updateLeague} type="text" name="league_name" placeholder="League Name" />
          <input id="max_players" className="formInput" type="text" name="max_players" onChange={this.updateLeague} value={this.state.maxPlayers} placeholder="Max Players" />
          <button className="button-primary formInput" onClick={this.submit} type="button">submit</button>
        </div>
      </div>
    );
  }
}

CreateComponent.propTypes = {
  createLeague: PropTypes.func,
  userID: PropTypes.string,
};

export default CreateComponent;
