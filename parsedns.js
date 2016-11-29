/**
 * Created by Administrator on 2016/11/25.
 */
var http = require('http'),
    dns = require('dns'),
    fs = require('fs'),
    url = require('url'),
    querystring = require('querystring');

http.createServer(function(req,res){
    var pathName = url.parse(req.url).pathname;
    var queryStr = url.parse(req.url).query;
    var param = querystring.parse(queryStr);

    if('favicon.ico' == pathName){
        return;
    }
    console.log(pathName);
    console.log(queryStr ? queryStr : 'no param');
    console.log(param);
    ///req.setEncoding('utf8');
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('success');
    ///router(res, req, pathName);
}).listen(3001, '127.0.0.1');

function router(res, req, pathName){
    switch (pathName){
        case '/parse':
            parseDns(res, req);
            break;
        default:
            goIndex(res, req);
            break;
    }
}
function parseDns(res, req){
    var postData = "";
    req.addListener('data', function(postDataChunk){
        postData += postDataChunk;
    });
    req.addListener('end', function(){
        var retData = getDns(postData, function (domin, address) {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('')
        });
    });
}

function goIndex(res, req){
    var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var indexPage = fs.readdirSync(readPath);
    res.end(indexPage);
}