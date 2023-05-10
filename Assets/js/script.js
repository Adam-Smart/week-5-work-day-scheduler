js().hour()
console.log (currentHour)

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
   var todoValue = $(this).siblings('.description').val();
   localStorage.setItem(key,todoValue)
   console.log ('Saved')

   console.log (key, todoValue)
    
  })


  

  function displayDay() {
    var today = dayjs().format('MMM DD, YYYY');
    document.getElementById('currentDay').textContent = today;
  console.log (today);
  }
  displayDay()

  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));