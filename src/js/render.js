//信息+图片渲染到页面上
(function ($,root) {
    function renderImg(src){
        var img = new Image();
        img.src = src;
        img.onload = function(){
            $('.img-box img').attr('src',src);
            root.blurImg(img,$('body'));

        }
    }
    function renderInfo(info){
        $('.song-name').html(info.song);
        $('.singer-name').html(info.singer);
        $('.album-name').html(info.album);
    }
    function renderIsLike(like){
        if(like){
            $('.like').addClass('liking')
        }else{
            $('.like').removeClass('liking')
        }
    }

    root.render = function(data){
        renderImg(data.image);
        renderInfo(data);
        renderIsLike(data.isLike);
    }
    

})(window.Zepto, window.player || (window.player = {}));

