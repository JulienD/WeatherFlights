var React = require('react');

var SearchDepartureAirportForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    //this.props.onSearchFlight();
  },
  getDestinationAiport: function(e) {
    console.log(this);
    if (e.currentTarget.value.length > 0 ) {
      this.props.onSearchDestinationAirport(e.currentTarget.value);
    }
  },
  render: function () {
    var that = this;
    var airportInputList = this.props.airport.map(function(airport) {
       return (
         <div>
           <input key={airport.id} type="radio" name="airport" value={airport.icaoCode} id={airport.icaoCode} onClick={that.getDestinationAiport} />
           <label htmlFor={airport.icaoCode}>{airport.city} - {airport.name}</label>
         </div>
       );
    });
    return (
      <form>
        {airportInputList}
        <button className="button right">Find Flights</button>
      </form>
    );
  }
});

module.exports = SearchDepartureAirportForm;
