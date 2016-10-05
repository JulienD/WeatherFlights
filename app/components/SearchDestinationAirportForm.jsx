var React = require('react');

var SearchDestinationAirportForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    //this.props.onSearchFlight();
  },
  getDestinationAiport: function() {
    this.props.onSearchDestinationAirport("foo departureAirport");
  },
  render: function () {
    var that = this;
    var airportInputList = this.props.airport.map(function(airport) {
      console.log(airport);
       return (
         <div>
           <input key={airport.id} type="radio" name="airport" value={airport.icaoCode} id={airport.icaoCode} />
           <label htmlFor={airport.icaoCode}>{airport.city} - {airport.name}</label>
         </div>
       );
    });
    console.log("SearchDepartureAirportForm --> render");
    console.log(this);
    return (
      <form>
        {airportInputList}
        <button className="button right">Find Flights</button>
      </form>
    );
  }
});

module.exports = SearchDestinationAirportForm;
