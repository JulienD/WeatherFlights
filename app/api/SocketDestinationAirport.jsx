require('stompjs'); // #1
var SockJS = require('sockjs-client'); // #2

module.exports = {
  getAirport: function (departureAirport, callback) {

    console.log(this);

    var socket = SockJS('http://mbp15.local:8080/gs-guide-websocket'); // <3>
    var stompClient = Stomp.over(socket);
    stompClient.connect({}, function(frame) {
      stompClient.send('/async/airports/connection/TLS',{}, "");
      var stompCallback = function(message) {
         // called when the client receives a STOMP message from the server
         console.log(message);
         if (message.body) {
           var airport = JSON.parse(message.body);
           console.log(airport);
           callback(airport);
         } else {
           //alert("got empty message");
         }
       };

     var subscription = stompClient.subscribe("/user/airports/connections", stompCallback);
    });
  }
}
