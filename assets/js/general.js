//load template
$('#navbar').load('/_navbar.html?v=1');
$('footer').load('/_footer.html?v=1');
$('#messenger').load('/_messenger.html');
if($('footer .toggle-collapse').is(':visible')){
    $('footer .collapse').removeClass('in');
}

//alert
function comingSoon(){
    swal({
        title: "Coming Soon!",   
        imageUrl: "/assets/img/avatar_3.png",
        imageSize: "100x100"
    });
}
function increasing(){
    swal("陸續邀請中...");
}

//messenger button controller
function deselect(e){
    $('#messenger_pop').slideFadeToggle(function(){
        e.removeClass('selected');
    });
}
$.fn.slideFadeToggle = function(easing, callback){
    return this.stop().animate({ opacity: 'toggle', height: 'toggle'}, 'fast', easing, callback);
};
$(function(){
    $('#messenger').on('click', function(){
        if($(this).hasClass('selected')){
            deselect($(this));
        }
        else{
            $(this).addClass('selected')
            $('#messenger_pop').slideFadeToggle();
        }
    });
    
    $('#messenger_close').on('click', function(){
        deselect($('#messenger'));
        return false;
    });
})
