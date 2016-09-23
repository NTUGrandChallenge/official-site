function showTeam() {
    $("#team-color").addClass('active');
    $("#single-color").removeClass('active');
    $("#team_div").show();
    $("#single_div").hide();
}
function showSingle() {
    $("#single-color").addClass('active');
    $("#team-color").removeClass('active');
    $("#single_div").show();
    $("#team_div").hide();
}
$(document).ready(function() {
    $("#team_div").hide();
    //five field toggle
    if(location.hash){
        var hash = window.location.hash.substring(1);
        if(hash == 'single') {
            showSingle();
        }
        if(hash == 'team') {
            showTeam();
        }
    }
	$("#single-color").click(function(){
        showSingle();
    })
    $("#team-color").click(function(){
        showTeam();
    })
});

function start(){
    swal("10 / 6 開放報名")
}