// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html
var currentHour = dayjs().hour()
console.log (currentHour)

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
});
// This function checks the current hours and checks it compares it to the hour
// in all the time blocks to see which ones are are classed as past, present and
// future
function hourCheck (){
  $('.time-block').each(function() {
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass('past')
    } else if (timeBlockHour === currentHour){
      $(this).addClass('present')
      $(this).removeClass('past')
    } else {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    }
    console.log(timeBlockHour)
  })
}
hourCheck()


  var saveBtn = $('button')
  var todos = $('div')
  var todoValue = $('textarea')

  saveBtn.on('click', function (){
   var key = this.parentElement.id;
   var userTodo = todoValue.val();
   localStorage.setItem(key,userTodo)
   console.log ('Saved')
   localStorage.getItem(key,userTodo)


    
  })



  function displayDay() {
    var today = dayjs().format('MMM DD, YYYY');
    document.getElementById('currentDay').textContent = today;
  console.log (today);
  }
  displayDay()
