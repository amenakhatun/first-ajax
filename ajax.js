$(document).ready(function() {

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data:{},
    dataType: 'text',
  });

  $("#Run-AJAX-Request-to-Root").on('click', function() {
      console.log('clicked');
  });

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    data: {},
    dataType: 'text',

  }).done(function(data){
    $('section').append(data);
    console.log('Response Data');

  }).fail(function(data){
    $('section').append(data);
    console.log('will try harder next time!');

  }).always(function(data){
    console.log('Hey The Request finsihed!')
  });

  $("#Run-AJAX-Request-to-Ping-Pong").on('click', function() {
      console.log('clicked');
  });

//Also in the done callback use jQuery to append
//the responseData string to the <section> element.


});


// Back in ajax.js, Create a 'click' event handler for
// the button, and move your AJAX call inside it.
// Refresh your page to load the new JavaScript.
// Try clicking your button a few times! In your network tab, inspect the requests as they come in.
// Now we are in control of when the request is made.
