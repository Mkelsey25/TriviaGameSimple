var seconds = 10;
var intervalId;
var wrongAnswers = 0;
var correctAnswers = 0;
var unanswered = 0;
//Set interval
function run() {
intervalId = setInterval(decrement, 1000);
}
function decrement() {
    seconds--;
    $(".showTimer").html("<h2>" + seconds + "</h2>");

    if (seconds === 0) {
        endTimer();
        //$(document.body).html("<h2>Correct Answers:</h2>" + correctAnswers + "<h2>Wrong Answers:</h2>" + wrongAnswers + "<h2>Unanswered:</h2>" + unanswered );
        $(".showTimer").append("<h2>Correct Answers:</h2>" + "<h2> Wrong Answers:</h2>" + "<h2> Unanswered:</h2>");
    }

}


function endTimer() {
clearInterval(intervalId);
//tracking answers 

    if(form.elements[2].checked || form.elements[3].checked || form.elements[8] || form.elements[11].checked) {
    correctAnswers++;
    }
    else if(form.elements[0].checked || form.elements[1].checked || form.elements[4].checked || form.elements[5].checked || form.elements[6].checked || form.elements[7].checked || form.elements[9].checked || form.elements[10].checked) {
        wrongAnswers++;
    }
    else{
        unanswered++;
    }
    console.log(correctAnswers);
    console.log(wrongAnswers);
    console.log(unanswered);
    };
/*switch(unanswered) {
    case 'form.elements[2].checked': 
    case 'form.elements[3].checked':
    case 'form.elements[8].checked':
    case 'form.elements[11].checked':*/


run();

//$("#button").click(function() {
//$(".showTimer").append("<h2>Correct Answers:</h2>" + "<h2> Wrong Answers:</h2>" + "<h2> Unanswered:</h2>");
//});




