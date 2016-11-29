/**
 * Created by Administrator on 2016/11/29.
 */
var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    querystring = require('querystring');

http.createServer(function(req,res){
    var pathName = url.parse(req.url).pathname;
    switch(pathName){
        case '/add':resAdd(res,req);
            break;
        default:resDefault(res);
            break;
    }
}).listen(3002, '127.0.0.1');

function resAdd(res,req){
    var postData = '';
    req.setEncoding('utf8');
    req.addListener('data', function(postDataChunk){
        postData += postDataChunk;
    });
    req.addListener('end', function(){
        var param = querystring.parse(postData);
        console.log(postData);
        console.log(param);
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end(postData);
    });

}

function resDefault(res){
    var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(readPath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(indexPage);
}