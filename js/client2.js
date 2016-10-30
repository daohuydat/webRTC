var connection = new WebSocket('wss://daohuydat.github.io/webRTC/p2p.html');
var name = "";

var loginName = document.querySelector('#loginName');
var loginBtn = document.querySelector('#loginBtn');
var friendName = document.querySelector('#friendName');
var connectBtn = document.querySelector('#connectFriendBtn');

var connectedUser, myConnection;

// user click login button
loginBtn.addEventListener('click', function (e) {
  name = loginName.value;

  if(name.length > 0) {
    send({
      type: "login",
      name: name
    });
  }
});

// handle message from server
connection.onmessage = function (message) {
  console.log("Got message", message.data);
};
