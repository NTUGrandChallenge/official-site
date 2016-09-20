$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['1st', '2nd', '3rd', '4th', '5th', '6tn', '7th', '8th']
    });
});

$('a').on('click', function(){
    $.fn.fullpage.setScrollingSpeed(0);
    setTimeout(function(){
        $.fn.fullpage.setScrollingSpeed(700)}, 100);
})