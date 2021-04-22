const Message = () => {
  
  return "Welcome to the page where we will handle DOM events!";
}

let getMessageElem = document.getElementById('Message');

getMessageElem.innerHTML = Message();

//add class on click event...
$('#add-font-change').click(() => {
  $('#Message').attr('class', 'changing-font');
})

//event listener that will remove the class changing-font to the element with the id of 'Message'
document.getElementById('remove-font-change').addEventListener('click', () => {
  getMessageElem.removeAttribute('class', 'changing-font');
})

$('#position-message').click(() => {
  $('#Message').
})