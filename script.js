// Post Current Date onto Jumbotron
var dateEl = $("#date")
$(dateEl).text(moment().format("dddd, MMMM Do"));

// Save Tasks for each hour with local storage 
// renderTasks();

var save = $(".save"),
    tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    console.log(tasks);

// Loop Over Each Save Button to input object items
save.each(function(){
    var buttonHour = $(this).data("hour"),
        taskInput = $("#task-" + buttonHour);  
    taskInput.val( tasks ["#task" + buttonHour])
    })

// Onclick Event for save buttons
$(save).on( 'click', function() {
    console.log("Saved!");

var buttonHour = $(this).data("hour");
    console.log(buttonHour);

var taskInput = $("#task-" + buttonHour),
    taskDes = taskInput.val();
    console.log(taskInput.val());

    tasks["#task" + buttonHour] = taskDes;

localStorage.setItem("tasks",JSON.stringify(tasks));
});


// // Define Render Tasks
// function renderTasks (){
// };
    


// Getting Current Hour of Day
// * Determine if each hour block is past, preset or future
var hourBlocks = $("#hour"),
    currentHour = moment().hour(Number);
    console.log(currentHour);

//     -Getting current hour moment().hour()


//     -in html build a similar class name $(".classname) to get all hour blocks.


//     Jquery.Each loop over elements


//      hourBlocks.each(function(index)){
//         var myCurrentBlock = $(this).val;
// //         using THIS my current block element.
//         data-hour="9";
