var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
    client.on('event', function(data){
        console.log(data, 'data111')
    });
    client.emit('news', { hello: 'world' });
    client.on('disconnect', function(){});
});
server.listen(3000);