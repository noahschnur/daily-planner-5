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

 // get from local storage
loadDate = function() {
    for (let i = 9; i <= 17; i++) {
    var newData = localStorage.getItem(i);
    $(`#${i}`).val(newData);

    console.log(localStorage.getItem(i))};
};

// Click save for localStorage
$(".saveBtn").on("click", function () {
    // get nearby values
    var content = $(this).siblings(".task-input").val();
    var time = $(this).siblings().attr('id');

    // save in localStorage
    localStorage.setItem(time, content);

    console.log(time, content)
});


loadDate()






















// setInterval(function () {
//     $(".hour .task-input").each(function(el) {
//       auditTask(el);
//       localStorage.getItem(content)
//     });
//   }, (1000 * 60) * 5);

// clear at end of day
// hour >6, localStorage.clear()