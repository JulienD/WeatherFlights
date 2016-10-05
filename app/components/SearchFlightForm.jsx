var React = require('react');

var SearchFlightForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    this.props.onSearchFlight();
  },
  render: function () {
    return (
      <div>FOOBAR!</div>
   );
  }
});

module.exports = SearchFlightForm;
