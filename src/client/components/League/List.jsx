import React from 'react';

class LeagueList extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <div>
        <div className="header notDrafted">You&apos;ve been invited to draft in these leagues!</div>
        <div id="notDrafted" />
        <div className="header drafted">You&apos;re part of the following leagues</div>
        <div id="drafted" />
      </div>
    );
  }
}

export default LeagueList;
