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
  $('#copyzone').hide();
  var saved = $('#claimsdata').val();

  // Save Operation
  function save() {
    saved = $('#claimsdata').val();
  }

  // Bind save to input changes
  $("#claimsdata").bind('input', save());

  // Revert button
  $('#revert').click(function () {
    $('#claimsdata').val(saved);
  });

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

  });

  // Remove Headers button
  $('#removeheaders').click(function () {
  	// regexp: /^.*\b(Docket)\b.*$/mg
  	// const regex = RegExp('^.*\b(Docket)\b.*$');
  	console.log("remove headers clicked");
  	var text = $('#claimsdata').val();
  	// console.log(regex.test(text));
  	text = text.replace(/^.*\b(Docket)\b.*$/mg, ''); // any full line with Docket is removed
    text = text.replace(/^.*\b(PATENT)\b.*$/mg, ''); // any full line with PATENT is removed
    text = text.replace(/^[0-9]*$/mg, '');  // remove page number lines
  	text = text.replace(/^\s*$(?:\r\n?|\n)/mg, ''); // remove blank lines
  	$('#claimsdata').val(text);
  });

  // Prepend (Original) button
  $('#prepend').click(function () {
    var text = $('#claimsdata').val();
    console.log(/^(\d{1,3}\. )/.test(text));
    text = text.replace(/^(\d{1,3}\.)/mg, "$& (Original) ");
    $('#claimsdata').val(text);
  });

  ////////////////////// Copy buttons //////////////////////////////////////////////////////////////

  $('#copyoriginal').click(function () {
    $('#copyzone').show();
    $('#copyzone').val("(Original)");
    $('#copyzone').select();
    document.execCommand("copy");
    $('#copyzone').hide();
  });

  $('#copycurrentlyamended').click(function () {
    $('#copyzone').show();
    $('#copyzone').val("(Currently amended)");
    $('#copyzone').select();
    document.execCommand("copy");
    $('#copyzone').hide();
  });

  $('#copycanceled').click(function () {
    $('#copyzone').show();
    $('#copyzone').val("(Canceled)");
    $('#copyzone').select();
    document.execCommand("copy");
    $('#copyzone').hide();
  });

  $('#copywithdrawn').click(function () {
    $('#copyzone').show();
    $('#copyzone').val("(Withdrawn)");
    $('#copyzone').select();
    document.execCommand("copy");
    $('#copyzone').hide();
  });

  $('#copypreviouslypresented').click(function () {
    $('#copyzone').show();
    $('#copyzone').val("(Previously presented)");
    $('#copyzone').select();
    document.execCommand("copy");
    $('#copyzone').hide();
  });

  $('#copynew').click(function () {
    $('#copyzone').show();
    $('#copyzone').val("(New)");
    $('#copyzone').select();
    document.execCommand("copy");
    $('#copyzone').hide();
  });

  $('#copynotentered').click(function () {
    $('#copyzone').show();
    $('#copyzone').val("(Not entered)");
    $('#copyzone').select();
    document.execCommand("copy");
    $('#copyzone').hide();
  });

  //////////////////////// End Copy Buttons //////////////////////////////////////////////////
}); 