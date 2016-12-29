import React, { PropTypes } from 'react';

class LeagueList extends React.Component {
  componentDidUpdate() {
    console.log('League List Refresh');
  }
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <div className="league-list-wrapper">
        <div className="row">
          <div className="header notDrafted twelve columns center">You belong to the following Leagues:</div>
          {this.props.leagues.map((league) =>
            <div className="four columns">
              <div className="center">
                <h4>{league.name}</h4>
              </div>
              <div className="u-max-full-width center">
                <button className="button-primary button-center">Draft</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

LeagueList.propTypes = {
  leagues: PropTypes.array,
};

export default LeagueList;
