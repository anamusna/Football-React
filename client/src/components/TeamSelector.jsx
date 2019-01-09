var TeamDetail = require('../components/TeamDetail');

var React = require('react');

var TeamSelector = React.createClass({
  getInitialState: function() {
    return { selectedIndex: undefined};
  },
  handleChange: function(event) {
    var newIndex = event.target.value
    this.setState({ selectedIndex: newIndex});
    this.props.selectTeam(this.props.teams[newIndex]);
    this.props.getTeam(this.props.teams[newIndex]._links.players.href);
  },
  
  render: function () {
    var options = this.props.teams.map( function(team, index) {
      return <option value={index} key={index}>{team.name}</option>
    })

    return (
      <select id="teams" value = {this.state.selectedIndex} onChange={this.handleChange}>
      {options}
      </select>
      );
  }
});

module.exports = TeamSelector;
