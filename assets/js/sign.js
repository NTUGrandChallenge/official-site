$(document).ready(function() {
	$("#row1").hide();	
	$("#row2").hide();
    $("#single").click(function(){
    	$("#row2").hide();
    	$("#row1").fadeIn();
    	$("#single").css("background-color","#ffee32");
    	$("#team").css("background-color","#b2b2b2");
    	$("#row0").hide();
    })
    $("#team").click(function(){
    	$("#row1").hide();
    	$("#row2").fadeIn();
    	$("#team").css("background-color","#ffee32");
    	$("#single").css("background-color","#b2b2b2");
    	$("#row0").hide();
    })
});