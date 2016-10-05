var React = require('react');

var SearchLocationCityForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var latitude = this.refs.latitude.value;
    var longitude = this.refs.longitude.value;

    // if (latitude.length > 0  && typeof latitude.length === 'number'
    // && longitude.length > 0 && typeof longitude.length === 'number') {
    //   //this.refs.latitude.value = '';
    //   //this.refs.longitude.value = '';
    //   this.props.onSearch(latitude, longitude);
    // }
    this.props.onSearchAirport(latitude, longitude);
  },
  getLocation: function () {
    var that = this;
    console.log(that);
    //var x = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // @TODO: Display an error message.
        //x.innerHTML = "Geolocation is not supported by this browser.";
    }
    function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      that.setState({
        latitude: latitude,
        longitude: longitude,
      });
      that.refs.latitude.value = latitude;
      that.refs.longitude.value = longitude;
    }
  },
  render: function () {
    return (
        <div>
          <form>
            <div className="row">
              <div className="row collapse prefix-radius">
                <div className="small-3 columns">
                  <span className="prefix">Lat</span>
                </div>
                <div className="small-9 columns">
                  <input type="text" ref="latitude"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row collapse prefix-radius">
                <div className="small-3 columns">
                  <span className="prefix">Long</span>
                </div>
                <div className="small-9 columns">
                  <input type="text" ref="longitude"/>
                </div>
               </div>
             </div>
            <button onClick={this.getLocation} className="button">Locate me</button>
            <button onClick={this.onFormSubmit} className="button right">Find Airports</button>
          </form>
        </div>
    );
  }
});

module.exports = SearchLocationCityForm;
