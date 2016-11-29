/**
 * Created by Administrator on 2016/11/29.
 */
var _res,_req;
var url = require('url'),
    querystring = require('querystring');
exports.init = function(req, res){
    _req = req;
    _res = res;
}

exports.GET = function(key){
    var paramStr = url.parse(_req.url).query;
    var param = querystring.parse(paramStr);
    return param[key] ? param[key] : '';
}

exports.POST = function(key, callBack){
    var postData = '';
    _req.setEncoding('utf8');
    _req.addListener('data', function(postDataChunk){
        postData += postDataChunk;
    });
    _req.addListener('end', function(){
        var param = querystring.parse(postData);
        var value = param[key] ? param[key] : '';
        callback(value);
    });
}

