var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
    client.on('message', function(data){
        if (data % 2 === 0) {
            client.emit('news', '输入的数'+data+'是偶数');
        }
    });
    client.on('disconnect', function(){});
});
server.listen(3000);