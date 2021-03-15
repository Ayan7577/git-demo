(function ($, root) {

    var duration, frameId;
    var startTime, lastPer = 0;
    function renderAllTime(allTime) {
        duration = allTime;
        var time = formaTime(allTime);
        // console.log(time);
        $('.all-time').html(time);
       
    }
    // 转换时间格式
    function formaTime(allTime) {
        allTime = Math.round(allTime);
        var m = Math.floor(allTime / 60);
        var s = allTime - m * 60;
        m = m < 10 ? "0" + m : m
        s = s < 10 ? "0" + s : s
        return m + ":" + s;
    }

    // 进度条开始运动
    function start(p) {

        cancelAnimationFrame(frameId);
        startTime = new Date().getTime();
        lastPer = p == undefined ? 0 : p;
        function frame() {
            var curTime = new Date().getTime();
            var per = lastPer + (curTime - startTime) / (duration * 1000);
            if (per <= 1) {
                // 更新进度条
                update(per);
            } else {
                cancelAnimationFrame(frameId);
            }
            frameId = requestAnimationFrame(frame);//屏幕刷新
        }
        frame();
    }

    function update(per) {
        var time = formaTime(per * duration);
        // console.log(time);
        $('.cur-time').html(time);

        var x = (per - 1) * 100;
        $('.pro-top').css({
            transform: 'translateX(' + x + '%)'
        })
    }

    function stop() {
        cancelAnimationFrame(frameId);
        var stopTime = new Date().getTime();
        lastPer = lastPer + (stopTime - startTime) / (duration * 1000);
    }


    root.pro = {
        renderAllTime: renderAllTime,
        start: start,
        stop: stop,
        update: update
    }

})(window.Zepto, window.player || (window.player = {}))