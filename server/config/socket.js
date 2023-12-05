module.exports.chatSockets = (socketServer)=>{
    let io = require('socket.io')(socketServer,{
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"]
          }
    });

    io.sockets.on('connection',(socket)=>{
        console.log('new connection received', socket.id);

        socket.on('disconnect',()=>{
            console.log('socket disconnected');
        });

        socket.on('join_room',(data)=>{
            console.log('joining request received',data);

            socket.join(data.chatroom);

            io.in(data.chatroom).emit('user_joined',data);
        });
        
        socket.on('sendMessage', function(data){
            // io.in(data.chatroom).emit('', data);
            io.emit('message', data);
        });

    });
}