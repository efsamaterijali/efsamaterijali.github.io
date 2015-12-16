$(document).ready(function () {
    // Show the Modal on load
    $("#myModal").modal({backdrop: "static"});
    $("#myModal").modal("show");
    
    
    // Hide the Modal
    $("#myBtn").click(function(){
        $("#myModal").modal("hide");
    });
    //zavrsen modal
    $( "#sig" ).click(function() {
        
  var n = $("#input").val();

	if (n == "milekitic") {
		$("#myModal").modal("hide");
       
	} 
	else {
		$("#h").css("color","red");
	}
        
       
    


});
});