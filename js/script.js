$(document).ready(function () {
    $( "#sig" ).click(function() {
        
  var n = $("#input").val();

	if (n == "milekitic") {
		$("#input").fadeOut("fast");
        $(".nestani").fadeOut("fast");
        $("#sajt").fadeIn("fast");
        $("#h").css("color","red");
	} 
	else {
		$("#h").css("color","red");
	}
        
        
});
});