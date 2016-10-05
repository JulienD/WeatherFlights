var React = require('react');

var SearchLocationGeoForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var that = this;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        that.setState({
          latitude: latitude,
          longitude: longitude,
        });
        this.props.onSearchAirport(latitude, longitude);
      },
      (error) => alert(JSON.stringify(error))
    );
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <button className="button">Locate me</button>
          </form>
        </div>
    );
  }
});

module.exports = SearchLocationGeoForm;
