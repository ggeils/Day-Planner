$(generate);

// Initialize function
function generate() {
    $('#currentDay').text(moment().format("dddd, MMMM Do"));

    $(".time-block").each(function () {
        let blockID = $(this).attr("id");

    $("#" + blockID + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockID));
    });

    $(".saveBtn").on("click", saveHandler);
}


// Code time display on top of webpage

// First function to initialize the blocks

// Timer for time block color

// Keep timeblocks updated in local storage

// Write a second function that colors the time blocks

// Save function for local storage