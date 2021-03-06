var tasks = {};

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

var createTask = function(taskText) {
    var taskP = $("<p>")
        addClass("task-input")
        .text(taskText);

    // Save to local storage
    var saveTask = $(".saveBtn").click(function() {
        localStorage.setItem("tasks", $(".taskP"));
    });
};

// Load tasks when page refreshed
var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
};