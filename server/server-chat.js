// basic nodejs web server with the sockets-io
// in terminal: npm i express http socket.io --save

// require dependencies:
let express = require('express');
let http = require('http');
let socket_io = require('socket.io');

// create express instance
let app = express();

// create server:
let server = http.createServer(app);

// socket-io to listen server
let io = socket_io(server);

// make message when a client connect:
io.on('connection', function(socket){
    let user = socket.id.slice(10);
    console.log('user ' + user + ' connected!');
})

io.on('disconnect', (socket)=>{
    let user = socket.id.slice(10);
    console.log('user ' + user + ' disconnected');
})

let port = process.env.port  || 8081;

//run server
server.listen(port, function () {
    console.log('server listening on port ' +port);
})

// run server (node server.js) and open the testing_client.html
// to test is all is ok.
// open the testing-client.html in the browser, open chrome dev-tools and type
// var socket = io.connect("http://localhost:8081")
// If all is good you will see in the server console that user connected
// hit ctr+c to stop the server
