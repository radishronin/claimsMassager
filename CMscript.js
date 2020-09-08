window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}

$(document).ready(function(){

  // TODO: everything
  console.log("document is ready");

  // Fix Line Breaks button
  $('#fixlinebreaks').click(function () {
  	console.log("fix line breaks clicked");
  	var text = $('#claimsdata').val();
  	text += "\nBig Meaty claws!"
  	$('#claimsdata').val(text);
  })


}); 