const Message = () => {
  
  return "Welcome to the page where we will handle DOM events!";
}

let getMessageElem = document.getElementById('Message');

getMessageElem.innerHTML = Message();

//event listener that will add the class changing-font to the element with the id of 'Message'
// document.getElementById('add-font-change').addEventListener('click', () => {
//   getMessageElem.classList.add('changing-font');
// })

//event listener that will remove the class changing-font to the element with the id of 'Message'
document.getElementById('remove-font-change').addEventListener('click', () => {
  getMessageElem.removeAttribute('class', 'changing-font');
})

$('#add-font-change').click(() => {
  $('#Message').attr('class', 'changing-font');
})