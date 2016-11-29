/**
 * Created by Administrator on 2016/11/22.
 */
var net = require('net');
var server = net.createServer(function(socket){
    socket.on('data', function(data){
        socket.write("hello!");
    });
    socket.on('end', function(){
        console.log('connect down');
    });
    socket.write('hello 1   1  1   1');
});

server.listen(8124, function(){
    console.log('server bound');
});