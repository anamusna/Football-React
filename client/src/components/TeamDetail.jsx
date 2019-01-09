var React = require('react');

var TeamDetail = function (props) {
  console.log(props.players)
  var options = props.players.map(function(player, index){
           return <tr key={index}>{player.name}</tr>})

  var options2 = props.players.map(function(player, index){
           return <tr>{player.position}</tr>})

  var options3 = props.players.map(function(player, index){
           return <tr>{player.marketValue}</tr>})
  
    if (!props.players) {
      return <h4>No Team Selected</h4>
    }
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Market Value</th>
          </tr>
          <tr>
          <td>
            {options}
          </td>
          <td>
            {options2}
          </td>
          <td>
            {options3}
          </td>
          </tr>
        </table>
      </div>
  );
};

module.exports = TeamDetail;
