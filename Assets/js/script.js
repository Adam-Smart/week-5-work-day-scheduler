// This Varible is the current hour using dayjs 
var currentHour = dayjs().hour()
// logs the current hour 
console.log (currentHour)

// This function uses dayjs to check the hour and compares it to the time times on the scheduler and dpending on the time it will apply the necessary classes to all of the time blocks
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
// hourCheck calls the function above 
hourCheck()

var saveBtn = $('button')
  var todos = $('div')
  var todoValue = $('textarea')

  // This fucntion allows the users todos to be saved to the correct time when the save button is clicked.
  saveBtn.on('click', function (){
   var key = this.parentElement.id;
   var todoValue = $(this).siblings('.description').val();
   localStorage.setItem(key,todoValue)
   console.log ('Saved')

   console.log (key, todoValue)
    
  })


  
// This function uses dayjs to apply the current day which is at the top of the page.
  function displayDay() {
    var today = dayjs().format('MMM DD, YYYY');
    document.getElementById('currentDay').textContent = today;
  console.log (today);
  }
  displayDay()

  // These get the items which are saved in the local storage and displays them to there correct time slots 
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));