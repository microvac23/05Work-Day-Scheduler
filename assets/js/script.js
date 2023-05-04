// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveEntry = $('.fa-save')
var currentDate = $('#currentDay')
var currentHour = dayjs().format('hh 00')
console.log(currentHour);
var dayEntry = $('.description9am')

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

// Compares the real time and the calendar's row time and switches class colors based on the comparison 
  function check9AM() {
    var nineAM = $('#9am').children().eq(0).text()

    if (currentHour === nineAM) {
      $('#9am').addClass('present')
      } else if (currentHour > nineAM){
        $('#9am').addClass('past')
      } else {
        $('#9am').addClass('future')
    }
  }

  function check10AM() {
    var tenAM = $('#10am').children().eq(0).text()
  
    if (currentHour === tenAM) {
      $('#10am').children().eq(0).addClass('present')
      } else if (currentHour > tenAM) {
        $('#10am').children().eq(0).addClass('past')
      } else {
        $('#10am').addClass('future')
    }
  }

  function check11AM() {
    var elevenAM = $('#11am').children().eq(0).text()
  
    if (currentHour === elevenAM) {
      $('#11am').children().eq(0).addClass('present')
      } else if (currentHour > elevenAM) {
        $('#11am').children().eq(0).addClass('past')
      } else {
        $('#11am').addClass('future')
    }
  }

  function check12PM() {
    var twelveAM = $('#12pm').children().eq(0).text()
  
    if (currentHour === twelveAM) {
      $('#12pm').children().eq(0).addClass('present')
      } else if (currentHour > twelveAM) {
        $('#12pm').children().eq(0).addClass('past')
      } else {
        $('#12pm').addClass('future')
    }
  }

  function check1PM() {
    var onePM = $('#1pm').children().eq(0).text()
  
    if (currentHour === onePM) {
      $('#1pm').children().eq(0).addClass('present')
      } else if (currentHour > onePM) {
        $('#1pm').children().eq(0).addClass('past')
      } else {
        $('#1pm').addClass('future')
    }
  }

  function check2PM() {
    var twoPM = $('#2pm').children().eq(0).text()
  
    if (currentHour === twoPM) {
      $('#2pm').children().eq(0).addClass('present')
      } else if (currentHour > twoPM) {
        $('#2pm').children().eq(0).addClass('past')
      } else {
        $('#2pm').addClass('future')
    }
  }

  function check3PM() {
    var threePM = $('#3pm').children().eq(0).text()
  
    if (currentHour === threePM) {
      $('#3pm').children().eq(0).addClass('present')
      } else if (currentHour > threePM) {
        $('#3pm').children().eq(0).addClass('past')
      } else {
        $('#3pm').addClass('future')
    }
  }

  function check4PM() {
    var fourPM = $('#4pm').children().eq(0).text()
  
    if (currentHour === fourPM) {
      $('#4pm').children().eq(0).addClass('present')
      } else if (currentHour > fourPM) {
        $('#4pm').children().eq(0).addClass('past')
      } else {
        $('#4pm').addClass('future')
    }
  }

  function check5PM() {
    var fivePM = $('#5pm').children().eq(0).text()
  
    if (currentHour === fivePM) {
      $('#5pm').children().eq(0).addClass('present')
      } else if (currentHour > fivePM) {
        $('#5pm').children().eq(0).addClass('past')
      } else {
        $('#5pm').addClass('future')
    }
  }
  
// executes all the above check functions and checks every minute to see if it needs to change classes
  var checkTime = function() {
    check9AM()
    check10AM()
    check11AM()
    check12PM()
    check1PM()
    check2PM()
    check3PM()
    check4PM()
    check5PM()
  }
  checkTime()
  setInterval(checkTime, 1000)
    
   
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  /* function renderEntry() {
   var description = localStorage.getItem("description")
   console.log(localStorage.getItem("description"));
   $('description9am').textContent = description
  }
  renderEntry()
  */
  saveEntry.click(function(event){
    event.preventDefault()
    btn = event.target
    console.log(btn)
    localStorage.setItem("description", "hi")
  });

  // Displays the current date and time in the header of the page.
  var currentTime = function(){
    currentDate.text(dayjs().format('MMM D, YYYY HH:mma'))
  }
  setInterval(currentTime, 1000)

});
