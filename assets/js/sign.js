$(document).ready(function() {
    $("#team_div").hide();
	$("#single-color").click(function(){
        $("#single-color").addClass('active');
        $("#team-color").removeClass('active');
        $("#single_div").show();
        $("#team_div").hide();
    })
    $("#team-color").click(function(){
        $("#team-color").addClass('active');
        $("#single-color").removeClass('active');
        $("#team_div").show();
        $("#single_div").hide();
    })
});

function start(){
    swal("10 / 6 開放報名")
}