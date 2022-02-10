$(generate);

// Initialize function
function generate() {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  $(".time-block").each(function () {
    let blockID = $(this).attr("id");

    $("#" + blockID + " textarea").text(
      localStorage.getItem(moment().format("DDDYYYY") + blockID)
    );
  });

  $(".saveBtn").on("click", saveHandler);
}

function timeBockColor() {
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));

    $(this).removeClass("past present future");

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}
function saveHandler(event) {
  let hourID = $(this).parent().attr("id");

  localStorage.setItem(
    moment().format("DDDYYYY") + hourID,
    $("#" + hourID + " textarea").val()
  );
}

// Code time display on top of webpage

// First function to initialize the blocks

// Timer for time block color

// Keep timeblocks updated in local storage

// Write a second function that colors the time blocks

// Save function for local storage
