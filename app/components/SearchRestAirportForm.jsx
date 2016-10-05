var React = require('react');

var SearchRestAirportForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    //this.props.onSearchFlight();
  },
  render: function () {
    var airportInputList = this.props.airport.map(function(a) {
       return (
         <div>
           <input key={a.id} type="radio" name="airport" value={a.id} id={a.id} />
           <label htmlFor={a.id}>{a.city} - {a.name}</label>
         </div>
       );
    });
    return (
      <form>
        {airportInputList}
        <button onClick={this.getLocation} className="button right">Find Flights</button>
      </form>
    );
  }
});

module.exports = SearchRestAirportForm;
