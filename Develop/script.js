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
$(".saveBtn").on("click", function() {
    var textContent = $(this).val(".task-input");

    localStorage.setItem("task" , textContent)
    console.log("task", textContent)
});

// Return from local storage

localStorage.getItem(textContent);

// reload time without refreshing page

setInterval(function () {
    $(".task-input").each(function(index, el) {
      auditTask(el);
    });
  }, (1000 * 60) * 5);

//  clear after end of day

