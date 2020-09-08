// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }
// This ensures jQuery loaded. It does.

$(document).ready(function(){

  // TODO: everything
  console.log("document is ready");

  // Fix Line Breaks button
  $('#fixlinebreaks').click(function () {
  	// Testing; clean up later.
  	console.log("fix line breaks clicked");
  	// var text = $('#claimsdata').val();
  	// text += "\nBig Meaty claws!"
  	// $('#claimsdata').val(text);

  	var text = $('#claimsdata').val();
  	console.log(text);
  	text = text.replace(/\r?\n|\r/g, ' ').trim();
  	console.log(text);
  	$('#claimsdata').val(text);

  })

  // Remove Headers button
  $('#removeheaders').click(function () {
  	// regexp: /^.*\b(Docket)\b.*$/mg
  	const regex = RegExp('^.*\b(Docket)\b.*$');
  	console.log("remove headers clicked");
  	var text = $('#claimsdata').val();
  	console.log(regex.test(text));
  	text = text.replace(/^.*\b(Docket)\b.*$/mg, '');
  	text = text.replace(/^\s*$(?:\r\n?|\n)/mg, '');
  	$('#claimsdata').val(text);
  })


}); 