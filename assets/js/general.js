//load template
$('#navbar').load('/official-site/_navbar.html');
$('footer').load('/official-site/_footer.html');
$('#messenger').load('/official-site/_messenger.html');
if($('#navbar').hasClass('fixed')){
    $('body').css('padding-top', $('#navbar').height());
}
if($('footer .toggle-collapse').is(':visible')){
    $('footer .collapse').removeClass('in');
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