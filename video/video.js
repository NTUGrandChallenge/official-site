//load youtube api asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//replace #player with iframe player
var player;
function onYouTubeIframeAPIReady(){
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'q6EoRBvdVPQ',
        playerVars: {
            'showinfo': 0,
            'controls': 0,
            'autohide': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

//events handler
function onPlayerReady(event){
    event.target.playVideo();
}
function onPlayerStateChange(event){
    if(event.data === 0){
        playEnd();
    }
}
function playEnd(){
    $('#player').remove();
    $('#lazyload').fadeIn('slow');
    $('#skip').fadeOut('fast');
    $('#toogleMute').fadeOut('fast');
}


//toogle mute
function toogleMute(){
    if(player.isMuted()){
        player.unMute();
    }
    else{
        player.mute();
    }
}

$(document).ready(function(){
//    onclick handler
    $('#toogleMute').click(toogleMute);
    $('#skip').click(playEnd);
    
//    load template after current page was done
    $('#lazyload').load('template.html');
})
