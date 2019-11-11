// Require the packages we will use:
var http = require("http"),
	socketio = require("socket.io"),
	fs = require("fs");

// Listen for HTTP connections.  This is essentially a miniature static file server that only serves our one file, client.html:
var app = http.createServer(function(req, resp){
	// This callback runs when a new connection is made to our HTTP server.
	
	fs.readFile("client.html", function(err, data){
		// This callback runs when the client.html file has been read from the filesystem.
		
		if(err) return resp.writeHead(500);
		resp.writeHead(200);
		resp.end(data);
	});
});
app.listen(3456);

let users = [];

// Do the Socket.IO magic:
var io = socketio.listen(app);
io.sockets.on("connection", function(socket){
    // This callback runs when a new Socket.IO connection is established.
    socket.room = "lobby";
    socket.join("lobby");

    socket.on("newConnection", function(username) {

        // save new user to some collection to keep track
    });
    
	socket.on('message_to_server', function(data) {
		// This callback runs when the server receives a new message from the client.
		
        console.log("message: " + data["message"]); // log it to the Node.JS output
        console.log("data['name']: " + data["name"]); 
        if(data["name"]!="lobby"){
            console.log("should be a private room message")
            io.sockets.in(data["name"]).emit("message_to_client",{message:data['message'], user:data['user']}); 
        }
        else{ 
            console.log("should be a public room message")
            
		io.sockets.in("lobby").emit("message_to_client",{message:data["message"], user:data["user"] }) }// broadcast the message to other users
    });
    
    socket.on('newroom', function(data) {
        console.log("Creating new room server side");
        socket.leave(socket.room);
        socket.join(data["name"]);
        socket.room = data["name"];
        console.log("name: "+data["name"]); // log it to the Node.JS output
        // broadcast the message to other users in the new room
		io.sockets.in(data["name"]).emit("message_to_client2",{name:data["name"], message:"A new room called "}) 
	});

});