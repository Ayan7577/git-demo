<<<<<<< HEAD
var songList,controlmanager,$=window.Zepto,root=window.player,$scope=$(document.body),audio=new root.audioManager;function bindClick(){$scope.on("play:change",function(o,n,t){audio.setAudioSource(songList[n].audio),"play"!=audio.status&&!t||(audio.play(),root.processor.start()),root.processor.renderAllTime(songList[n].duration),root.render(songList[n]),root.processor.updata(0)}),$scope.on("click",".prev-btn",function(){var o=controlmanager.prev();$scope.trigger("play:change",o)}),$scope.on("click",".next-btn",function(){var o=controlmanager.next();$scope.trigger("play:change",o)}),$scope.on("click",".play-btn",function(){"play"==audio.status?(audio.pause(),root.processor.stop()):(root.processor.start(),audio.play()),$(this).toggleClass("playing")}),$scope.on("click",".like-btn",function(){songList[controlmanager.index].isLike?songList[controlmanager.index].isLike=!1:songList[controlmanager.index].isLike=!0,root.render(songList[controlmanager.index])}),$scope.on("click",".list-btn",function(){root.playList.show(controlmanager)})}function bindTouch(){var o=$scope.find(".slider-point"),n=$scope.find(".pro-wrapper").offset(),t=n.left,r=n.width;o.on("touchstart",function(){root.processor.stop()}).on("touchmove",function(o){o=(o.changedTouches[0].clientX-t)/r;(1<o||o<0)&&(o=0),root.processor.updata(o)}).on("touchend",function(o){var n=(o.changedTouches[0].clientX-t)/r;(1<n||n<0)&&(n=0);o=songList[controlmanager.index].duration*n;audio.jumpToplay(o),root.processor.start(n),$scope.find(".play-btn").addClass("playing")})}function getData(o){$.ajax({type:"GET",url:o,success:function(o){bindClick(),bindTouch(),root.playList.renderList(o),controlmanager=new root.controlManager(o.length),songList=o,$scope.trigger("play:change",0)},error:function(){}})}getData("../mock/data.json");
=======
var songList,controlmanager,$=window.Zepto,root=window.player,$scope=$(document.body),audio=new root.audioManager;function bindClick(){$scope.on("play:change",function(o,n,t){audio.setAudioSource(songList[n].audio),"play"!=audio.status&&!t||(audio.play(),root.processor.start()),root.processor.renderAllTime(songList[n].duration),root.render(songList[n]),root.processor.updata(0)}),$scope.on("click",".prev-btn",function(){var o=controlmanager.prev();$scope.trigger("play:change",o)}),$scope.on("click",".next-btn",function(){var o=controlmanager.next();$scope.trigger("play:change",o)}),$scope.on("click",".play-btn",function(){"play"==audio.status?(audio.pause(),root.processor.stop()):(root.processor.start(),audio.play()),$(this).toggleClass("playing")}),$scope.on("click",".like-btn",function(){songList[controlmanager.index].isLike?songList[controlmanager.index].isLike=!1:songList[controlmanager.index].isLike=!0,root.render(songList[controlmanager.index])}),$scope.on("click",".list-btn",function(){root.playList.show(controlmanager)})}function bindTouch(){var o=$scope.find(".slider-point"),n=$scope.find(".pro-wrapper").offset(),t=n.left,r=n.width;o.on("touchstart",function(){root.processor.stop()}).on("touchmove",function(o){o=(o.changedTouches[0].clientX-t)/r;(1<o||o<0)&&(o=0),root.processor.updata(o)}).on("touchend",function(o){var n=(o.changedTouches[0].clientX-t)/r;(1<n||n<0)&&(n=0);o=songList[controlmanager.index].duration*n;audio.jumpToplay(o),root.processor.start(n),$scope.find(".play-btn").addClass("playing")})}function getData(o){$.ajax({type:"GET",url:o,success:function(o){bindClick(),bindTouch(),root.playList.renderList(o),controlmanager=new root.controlManager(o.length),songList=o,$scope.trigger("play:change",0)},error:function(){}})}getData("../mock/data.json");
>>>>>>> 4c6663123d65885791cd3bfc6fdcb9202db776b7
