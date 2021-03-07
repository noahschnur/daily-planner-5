// Add current day to header
var currentDay = moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentDay);

// Add hour checking to schedule for past/present/future classes
var hour = moment().hour();
    $("textarea").each(function () {
        if (this.id < hour) {
            $(this).addClass("past");
            $(this).removeClass("present future");
        } else if (this.id == hour) {
            $(this).addClass("present");
            $(this).removeClass("past future");
        } else if (this.id > hour) {
            $(this).addClass("future");
            $(this).removeClass("past present");
        }
});

// Click save for localStorage
$(".saveBtn").on("click", function () {
    // get nearby values
    var content = $(this).siblings(".task-input").val();
    var time = $(this).siblings().attr('id');
    // save in localStorage
    localStorage.setItem(time, content);
 console.log(time, content)
});

