var React = require('react');
var SearchLocationCityForm = require('SearchLocationCityForm');
var SearchLocationGeoForm = require('SearchLocationGeoForm');

//var SearchRestAirportForm = require('SearchRestAirportForm');

var SearchDepartureAirportForm = require('SearchDepartureAirportForm');
var SearchDestinationAirportForm = require('SearchDestinationAirportForm');

var RestAirport = require('RestAirport');
var SocketAirport = require('SocketAirport');
var SocketDestinationAirport = require('SocketDestinationAirport');

var Search = React.createClass({
  getDefaultProps: function() {
    return {
      latitude: 'unknown',
      longitude: 'unknown',
      weather: "sun",
      isLoadingAirport: false,
      isLoadingDestinationAirport: false,
      airport: [],
      destinationAirport: []
    };
  },
  getInitialState: function () {
    return {
      isLoadingAirport: false,
      isLoadingDestinationAirport: false,
      airport: [],
      destinationAirport: []
    }
  },
  //
  // handleSearchRestAirport: function (latitude, longitude) {
  //   var that = this;
  //   this.setState({isLoadingAirport: true});
  //
  //   RestAirport.getAirport(latitude, longitude, 155).then(function (airport) {
  //     console.log(airport);
  //      that.setState({
  //        airport: airport,
  //        isLoadingAirport: false
  //      });
  //   }, function (errorMessage) {
  //     that.setState({isLoadingAirport: false});
  //   });
  // },
  //
  /**
  * Search Deaparture Airports.
  */
  searchSetAirport: function (airport) {
    console.log("searchSetAirport");
    var that = this;
    var airports = this.state.airport;
    airport.map(function(item, i){
      airports.push(item);
      that.setState({ airport: airports });
    });
    that.setState({isLoadingAirport: false});
    console.log("/searchSetAirport");
  },
  handleSearchSocketAirport: function (latitude, longitude) {
    console.log("handleSearchSocketAirport");
    this.setState({isLoadingAirport: true});
    SocketAirport.getAirport(latitude, longitude, 100, this.searchSetAirport);
    console.log("/handleSearchSocketAirport");
  },
  /**
  * Search Destination Airports.
  */
  searchSetDestinationAirport: function (airport) {
    console.log("searchSetDestinationAirport");
    var that = this;
    var airports = this.state.destinationAirport;
    airport.map(function(item, i){
      airports.push(item);
      that.setState({ destinationAirport: airports });
    });
    that.setState({isLoadingDestinationAirport: false});
    console.log("/searchSetDestinationAirport");
  },
  handleSearchDestinationAirport: function (departureAirport) {
    console.log("handleSearchDestinationAirport");
    this.setState({isLoadingDestinationAirport: true});
    SocketDestinationAirport.getAirport(departureAirport, this.searchSetDestinationAirport);
    console.log("/handleSearchDestinationAirport");
  },
  /**
  * Render Form wrapper.
  */
  render: function () {
    console.log("render--> ");
    var that = this;
    var {isLoadingAirport, isLoadingDestinationAirport, airport, destinationAirport} = this.state;
    // function renderRestAirportForm () {
    //   if (isLoadingAirport) {
    //     return <h3>Fetching airports...</h3>;
    //   } else if (airport) {
    //     return <SearchRestAirportForm airport={airport} />;
    //   }
    // }
    function renderDepartureAirportForm () {
      if (isLoadingAirport) {
        return <h3>Fetching airports...</h3>;
      } else if (airport.length > 0) {
        return <SearchDepartureAirportForm onSearchDestinationAirport={that.handleSearchDestinationAirport} airport={airport} />;
      }
    }
    function renderDestinationAirportForm () {
      if (isLoadingDestinationAirport) {
        return <h3>Fetching airports...</h3>;
      } else if (destinationAirport.length > 0) {
        return <SearchDestinationAirportForm airport={destinationAirport} />;
      }
    }

    return (
      <div>
        <div className="row">
          <div className="small-12 large-5 columns">
            <SearchLocationCityForm onSearchAirport={this.handleSearchSocketAirport} />
          </div>
          <div className="small-12 large-2 columns center"><h4>~ OR ~</h4></div>

          <div className="small-12 large-5 columns">
            <SearchLocationGeoForm onSearchAirport={this.handleSearchSocketAirport} />
          </div>
        </div>
        <div className="row">
          <div className="small-12 large-3 columns">
            <h3 id="source">Departure Airports</h3>
            {renderDepartureAirportForm()}
          </div>
        </div>
        <div className="row">
          <div className="small-12 large-3 columns">
            <h3 id="destination">Destination Airports</h3>
            {renderDestinationAirportForm()}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Search;
