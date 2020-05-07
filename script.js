timeBlock();

// Post Current Date onto Jumbotron
var dateEl = $("#date");
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


// Getting Current Hour of Day
// * Determine if each hour block is past, preset or future

function timeBlock(){
 

    $("textarea").each(function(index){
        currentHour = (moment().format("k")-1);
        $("#currentHour").text("Hour: " + currentHour);
        console.log(JSON.parse(currentHour));
    
        hourBlocks = $(this).data("hour");
        console.log(hourBlocks);

        if (hourBlocks < currentHour) {
        $(this).css("background-color", "gray");
        console.log("THIS IS IN THE PAST");
        }
                
        else if (hourBlocks === currentHour) {
        $(this).css("background-color", "red");
        console.log("THIS IS NOW");
        };
    })
};


