$(document).ready(() => {

  //Practice inserting a string value into an HTML element established a function with a value. Then I use jQuery's 'append()' function to append the output of the function 'Message()' to the element with an id of 'Message'.
  const Message = () => {
    return 'Welcome to the page where we will handle DOM events!';
  }
  $('#Message').append(Message());





  //EVENT LISTENERS

  //ADD class on CLICK event... with jQuery
  $('#add-font-change').click(() => {
    $('#Message').attr('class', 'changing-font');
  })

  //REMOVE class on CLICK event... with jQuery
  $('#remove-font-change').click(() => {
    $('#Message').removeAttr('class', 'changing-font');
  })

  let itemsInCart = 0;
    $('.add-to-cart').click(() => {
      //onclick add a value of 1 to the 'span' element with the parent element that has a class of cart and allow it to increment with each click. Also add the class of 'cart-count' if the value is 0.
      itemsInCart++;
      $('#cart-count').attr('class', 'cart-count').text(itemsInCart);
    })
  

  $('#clear-cart').click(() => {
    itemsInCart = 0;
    $('#cart-count').removeAttr('class', 'cart-count').text("");
  })

  $(document).on('click', '#search-submit', () => {
    console.log($('#search').val());
  })
})