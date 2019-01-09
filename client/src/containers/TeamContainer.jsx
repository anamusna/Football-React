var React = require('react');
var TeamSelector = require('../components/TeamSelector');
var TeamDetail = require('../components/TeamDetail');

var TeamContainer = React.createClass({
  getInitialState: function () {
    return {
      teams: [],
      focusTeam: null,
      players: []
    };
  },
  componentDidMount: function () {
    var url = "http://api.football-data.org/v1/competitions/426/teams";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("X-Auth-Token", "	bf9afbee45724588af250470d0fc9b4a")
    request.onload = function () {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        var newData = data.teams
        this.setState({ teams: newData, focusTeam: newData[0] });
      }
    }.bind(this);
    request.send(null);
  },
  getTeam: function (playerUrl) {
    var url = playerUrl;
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("X-Auth-Token", "c3cf38b325424e329a5d3b47a0c6a416")
    request.onload = function () {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        var playerData = data.players
        this.setState({ players: playerData });
      }
    }.bind(this);
    request.send(null);
  },
  setFocusTeam: function (team) {
    this.setState({ focusTeam: team });
  },
  render: function () {
    return (
      <div>
        <h2>Team Container</h2>
        <TeamSelector teams={this.state.teams} selectTeam={this.setFocusTeam} getTeam={this.getTeam} />
        <TeamDetail players={this.state.players} team={this.state.focusTeam} />
      </div>
    );
  }
});

module.exports = TeamContainer;
