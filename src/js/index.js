var root = window.player;
var dataList;
var len;
var audio = root.AudioManager;
var control;
var timer;
var i
function getData(url) {
    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            len = data.length;
            control = new root.controlIndex(len);
            dataList = data;
            bindEvent();
            bindTouch();
            changeLoad(0);
        },
        error: function () {
            console.log("error");
        }
    })
}

function bindEvent() {
    $('.prev').on('click', function () {
        i = control.prev();
        changeLoad(i);
        root.pro.start(0);
        if (audio.status == 'pause') {
            root.pro.stop();
        }
    })
    $('.next').on('click', function () {
        i = control.next();
        changeLoad(i);
        root.pro.start(0);
        if (audio.status == 'pause') {
            root.pro.stop();
        }
    })
    $('.play').on('click', function () {
        if (audio.status == 'pause') {
            audio.play();
            root.pro.start();
            var deg = $('.img-box').attr('data-deg');
            // console.log(deg);
            rotated(deg);
        } else {
            audio.pause();
            root.pro.stop();
            clearInterval(timer);
        }
        $('.play').toggleClass('playing');
    })
    $('.like').on('click', function () {
        // console.log(1);
        if (dataList[control.index].isLike) {
            dataList[control.index].isLike = false;
        } else {
            dataList[control.index].isLike = true;
        }
        root.render(dataList[control.index]);
    })
    $('body').on('click', function () {
        $('.list-wrap').css({
            'display': 'none'
        })
        
    })
    $('.list').on('click', function () {
        $('.list-wrap').css({
            'display': 'block'
        })
        root.list.shwoList(dataList);
        return false;
    })
}

function changeLoad(i) {
    clearInterval(timer);
    $('.img-box').attr('data-deg', 0);
    $('.img-box').css({
        'transform': 'rotateZ(0deg)',
        'transition': 'none'
    })
    audio.getAudio(dataList[i].audio);
    root.render(dataList[i]);
    root.pro.renderAllTime(dataList[i].duration);
    if (audio.status == 'play') {
        audio.play();
        rotated();
    }

}

function bindTouch() {
    var bottom = $('.pro-bottom').offset();
    var l = bottom.left;
    var w = bottom.width;
    var $spot = $('.spot');
    $spot.on('touchstart', function () {
        root.pro.stop();
    }).on('touchmove', function (e) {
        // console.log(e);
        var x = e.changedTouches[0].clientX;
        var per = (x - l) / w;
        if (per >= 0 && per <= 1) {
            root.pro.update(per);
        }
    }).on('touchend', function (e) {
        var x = e.changedTouches[0].clientX;
        var per = (x - l) / w;
        if (per >= 0 && per <= 1) {
            root.pro.start(per);
            console.log(dataList);
            var time = per * dataList[control.index].duration;
            audio.playTo(time);
            audio.play();
            audio.status = 'paly';
            $('.play').addClass('playing');
        }
    })
}

function rotated(deg) {
    if (!deg) {
        deg = 0;
    }
    deg = +deg;
    clearInterval(timer);
    // var deg = 0;
    timer = setInterval(function () {
        deg += 1;
        $('.img-box').attr('data-deg', deg);
        $('.img-box').css({
            'transform': 'rotateZ(' + deg + 'deg)',
            'transition': 'all 1s ease-out'
        })
    }, 100);
}


getData("../mock/data.json");

//render 信息+图片渲染到页面上
// 点击按钮
// 音频的播放与暂停 切割
// 进度条运动 与 拖拽
// 图片旋转
// 列表切歌
