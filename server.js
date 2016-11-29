/**
 * Created by Administrator on 2016/11/22.
 */
var http = require("http");
var url = require("url");
var items = [];
var server = http.createServer(function(req, res){
    switch (req.method) {
        case 'POST':
            var item='';
            req.setEncoding('utf8');
            req.on('data', function(chunk){
                item += chunk;
                //console.log("parsed", chunk);
            });
            req.on('end', function(){
                //console.log("done parsing");
                items.push(item);
                res.end('ok\n');
            });
            break;
        case 'GET':
            items.forEach(function(item, i){
                res.write(i + ')' + item + '\n');
            });
            res.end();
            break;
    }

});
console.log("listen port 3002");
//console.log(module.paths);
server.listen(3002);