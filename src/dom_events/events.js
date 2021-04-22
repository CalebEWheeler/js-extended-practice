//Practice inserting a string value into an HTML element established a function with a value. Then I use jQuery's 'append()' function to append the output of the function 'Message()' to the element with an id of 'Message'.
const Message = () => {
  
  return 'Welcome to the page where we will handle DOM events!';
}
// $('#Message').append(Message());





//EVENT LISTENERS

//ADD class on CLICK event... with jQuery
$('#add-font-change').click(() => {
  $('#Message').attr('class', 'changing-font');
})

//REMOVE class on CLICK event... with jQuery
$('#remove-font-change').click(() => {
  $('#Message').removeAttr('class', 'changing-font');
})
