// Post Current Date onto Jumbotron
var dateEl = $("#date")
$(dateEl).text(moment().format("dddd, MMMM Do"));

// Save Tasks for each hour with local storage 

// renderTasks();

var save = $(".save");

  
$(save).on( 'click', function() {
    event.preventDefault();
    console.log("Saved!");

var buttonHour = $(this).data("hour");
    console.log(buttonHour);

var taskInput = $("#task-" + buttonHour);
    console.log(taskInput.val());


localStorage.setItem("taskInput", )

});

// Define Render Tasks
// function renderTasks (){
// var 

// initials = localStorage.getItem("initials"),\

// if (task === null) {
//     return;
//   }

//   initialsSpan.textContent = task
// };
    


// var highScoreFormEl =$("form"),
//     scoreEl =$("#score");
//     submit =$("#submit");
//     initialsInput =$("#initialsInput")


// Getting Current Hour of Day
// * Determine if each hour block is past, preset or future
var hourBlocks = $("#hour"),
    currentHour = moment().hour(Number);

//     -Getting current hour moment().hour()


//     -in html build a similar class name $(".classname) to get all hour blocks.


//     Jquery.Each loop over elements


//      hourBlocks.each(function(index)){
//         var myCurrentBlock = $(this).val;
// //         using THIS my current block element.
//         data-hour="9";
