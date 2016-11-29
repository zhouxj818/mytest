/**
 * Created by Administrator on 2016/11/23.
 */
var dgram = require('dgram');
var message = new Buffer("mn d dns,ans");
var client = dgram.createSocket('udp4');
///send(buffer, offset, length, port, address, callback)
client.send(message, 0, message.length, 8123, "localhost", function(err, bytes){
    client.close();
});