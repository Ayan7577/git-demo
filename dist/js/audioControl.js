!function(i){function t(){this.audio=new Audio,this.status="pause"}t.prototype={play:function(){this.audio.play(),this.status="play"},pause:function(){this.audio.pause(),this.status="pause"},getAudio:function(i){this.audio.src=i,this.audio.load()},playTo:function(i){this.audio.currentTime=i}},i.AudioManager=new t}((window.Zepto,window.player||(window.player={})));