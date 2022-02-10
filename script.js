$(generate);

// Initialize function
function generate() {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  timeBlockColor();

  $(".time-block").each(function () {
    let blockID = $(this).attr("id");

    $("#" + blockID + " textarea").text(
      localStorage.getItem(moment().format("DDDYYYY") + blockID)
    );
  });

  // Utilizes the save button to send data to localstorage
  $(".saveBtn").on("click", saveHandler);
}

// Function to color the time blocks
function timeBlockColor() {
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));

    // Removes previously applied classes dependent on time
    $(this).removeClass("past present future");

    // Adds classes to the time block based on the current time to color them
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

// Function to handle saving the data to localstorage
function saveHandler(event) {
  let hourID = $(this).parent().attr("id");

  localStorage.setItem(
    moment().format("DDDYYYY") + hourID,
    $("#" + hourID + " textarea").val()
  );
}