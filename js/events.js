const Message = () => {
  
  return "Welcome to the page where we will handle DOM events!";
}

document.getElementById('Message').innerHTML = Message();

//event listener that will add the class changing-font to the element with the id of 'Message'
document.getElementById('add-font-change').addEventListener('click', () => {
  console.log("I'm clicked!");
  document.getElementById('Message').classList.add('changing-font');
})

//event listener that will remove the class changing-font to the element with the id of 'Message'
document.getElementById('remove-font-change').addEventListener('click', () => {
  console.log("I'm clicked!");
  document.getElementById('Message').removeAttribute('class', 'changing-font');
})