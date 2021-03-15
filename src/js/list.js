(function ($, root) {
    function shwoList(dataList) {
        // 渲染li
        $.each(dataList, function (key, val) {
            var li = $('<li><span>' + (key + 1) + '</span>' + val.song + '</li>')
            li.appendTo($('.list-wrap')).on('click', function () {
                audio.status = 'play';
                changeLoad(key);
                root.pro.start(0);
                if (audio.status == 'pause') {
                    root.pro.stop();
                }
                $('.play').addClass('playing');
                
            })
        })
    }
    // 移除li
    function removeChild() {
        $('.list-wrap li').remove();
    }
    root.list = {
        shwoList: shwoList,
        removeChild: removeChild
    }
})(window.Zepto, window.player || (window.player = {}))