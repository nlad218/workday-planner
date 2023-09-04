$(document).ready(function () {
  //For loop to label hour blocks according to current time
  var currentHour = dayjs().hour();

  for (var i = 9; i < 18; i++) {
    if (i < currentHour) {
      $("#hour-" + i).addClass("past");
    } else if (i === currentHour) {
      $("#hour-" + i).addClass("present");
    } else {
      $("#hour-" + i).addClass("future");
    }
  }

  //Code to display current date
  var currentDate = dayjs().format("dddd, MMM D");
  $("#currentDay").text(currentDate);

  // Adding a click event listener for the save button
  $(".saveBtn").on("click", function () {
    // Get the ID of the parent time-block element
    var timeBlockID = $(this).parent().attr("id");

    // Get the user input from the textarea within the same time-block
    var userInput = $(this).siblings(".description").val();

    // Save the user input in local storage using the timeBlockID as the key
    localStorage.setItem(timeBlockID, userInput);
  });

  // Retrieve and populate saved user input from local storage
  for (var i = 9; i < 18; i++) {
    var savedInput = localStorage.getItem("hour-" + i);
    if (savedInput) {
      $("#hour-" + i + " .description").val(savedInput);
    }
  }
});
