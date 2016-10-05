var axios = require('axios');

const BO_AIRPORT = 'http://mbp15.local:8080/airport/find';

module.exports = {
  getAirport: function (latitude, longitude, distance) {
    console.log()
    var encodedLatitude = encodeURIComponent(latitude);
    var encodedLongitude = encodeURIComponent(longitude);
    var encodedDistance = encodeURIComponent(distance);
    var requestUrl = `${BO_AIRPORT}/${encodedLatitude}/${encodedLongitude}/${encodedDistance}`;
    console.log("requestUrl ==>" + requestUrl);

    var config = {
      headers: {
       'Content-Type': 'application/json',
      }
    };

    return axios.get(requestUrl, config).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
