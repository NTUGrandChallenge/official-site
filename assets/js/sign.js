$(document).ready(function() {
    $("#team_div").hide();
    $("#single-color").css("background-color","#142598");
	$("#single-color").click(function(){
        $("#single-color").css("background-color","#142598");
        $("#single-color").css("outline","solid #FFF 2px");
        $("#team-color").css("outline","none");
        $("#team-color").css("background-color","black");
        $("#team_div").hide();
        $("#single_div").show();
    })
    $("#team-color").click(function(){
        $("#team-color").css("background-color","#142598");
        $("#team-color").css("outline","solid #FFF 2px");
        $("#single-color").css("outline","none");
        $("#single-color").css("background-color","black");    
        $("#team_div").show();
        $("#single_div").hide();
    })
});