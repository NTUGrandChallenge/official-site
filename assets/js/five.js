//five field toggle
if(location.hash){
    var hash = window.location.hash.substring(1);
    $('#content').load('_' + hash + '.html');
}
//else{
//    $('#content').load('_smartLife.html');
//}
$('#five-field-toggle a').click(function(e){
    var hash = $(this).attr('href').substring(1);
    window.location.hash = hash;
    $('#content').load('_' + hash + '.html');
    $('#five-field-toggle a').removeClass('active');
    $(this).addClass('active');
})


