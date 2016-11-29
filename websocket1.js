/**
 * Created by Administrator on 2016/11/23.
 */
var websock = new WebSocket("ws://127.0.0.1:12121/updates");
websock.onopen = function () {
    setInterval(function(){
        if(websock.bufferedAmount == 0){
            websock.send(getUpdateData());
        }
    }, 50);
};

