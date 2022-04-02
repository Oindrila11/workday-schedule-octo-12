// Define common variable
var saveButton = $(".saveButton");

// Display current day at top
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// tasks color change past, present, futture
function timeDisplay() {
    var Time = moment().hours();

    $(".time-block").each(function() {
        var presentTime = parseInt($(this).attr("id"));

        if (presentTime > Time) {
            $(this).addClass("future");
        } else if (presentTime === Time) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
            
        }
    
    })
};


timeDisplay();




//saving tasks to local storage
