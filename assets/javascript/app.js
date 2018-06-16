$(document).ready(function() {
$(".container").on("click", ".startGame", function() {
    //Dynamically create questions, answers, and submit button in the html.
    $(".col-md-8").append("<h4>Which of these beers is considered a dark beer?</h4>");
    $(".col-md-8").append("<form>");
    $("form").attr("id", "form");
    $("#form").append(('<input type="radio" class="C" name="darkBeer" value="C" />' + "Stout" + "<br>"));
    $("#form").append(('<input type="radio" class="W" name="darkBeer" value="W" />' + "Wheat Ale" + "<br>"));
    $("#form").append(('<input type="radio" class="W" name="darkBeer" value="W" />' + "American Pale Ale" + "<br>"));
    $("#form").append("<h4>When did humans begin brewing beer?</h4>");
    $("#form").append(('<input type="radio" class="W" name="year" value="W" />' + "6000 years ago" + "<br>"));
    $("#form").append(('<input type="radio" class="C" name="year" value="C" />' + "3900 years ago" + "<br>"));
    $("#form").append(('<input type="radio" class="W" name="year" value="W" />' + "1580 years ago" + "<br>"));
    $("#form").append("<h4>Which of these is a brewery located in Atlanta?</h4>");
    $("#form").append(('<input type="radio" class="W" name="local" value="W" />' + "Brekenridge" + "<br>"));
    $("#form").append(('<input type="radio" class="W" name="local" value="W" />' + "Bell's" + "<br>"));
    $("#form").append(('<input type="radio" class="C" name="local" value="C" />' + "Second Self" + "<br>"));
    $("#form").append("<h4>Which of these beers is considered a sour?</h4>");
    $("#form").append(('<input type="radio" class="W" name="sour" value="W" />' + "Porter" + "<br>"));
    $("#form").append(('<input type="radio" class="W" name="sour" value="W" />' + "Pilsner" + "<br>"));
    $("#form").append(('<input type="radio" class="C" name="sour" value="C" />' + "Gose"));
    $(".col-md-8").append("<button>Submit</button>");
    $(".startGame").remove();
    $("button").attr("id", "submit");
    $("button").attr("class", "btn btn-primary btn-lg");

    run();
});

var seconds = 40;
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
    $(".showTimer").html("<h2>" + seconds + " seconds left!" + "</h2>");

    if (seconds === 0) {
        endTimer();
        $(".col-md-8").empty();
        $(".col-md-8").append("<br> <h1>Beer Snob Trivia</h1> <br> <h2>Correct Answers:" + correctAnswers + "</h2>" + "<h2> Wrong Answers:" + wrongAnswers + "</h2>" + "<h2> Unanswered:" + unanswered + "</h2> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");    }

}


function endTimer() {
clearInterval(intervalId);
//tracking answers 

    if($('input[name=darkBeer]:checked').val() === "C") {
    correctAnswers++;
    }
    else if($('input[name=darkBeer]:checked').val() === "W") {
        wrongAnswers++;
    }
    else{
        unanswered++;
    }

    if($('input[name=year]:checked').val() === "C") {
        correctAnswers++;
        }
        else if($('input[name=year]:checked').val() === "W") {
            wrongAnswers++;
        }
        else{
            unanswered++;
        }

        if($('input[name=local]:checked').val() === "C") {
            correctAnswers++;
            }
            else if($('input[name=local]:checked').val() === "W") {
                wrongAnswers++;
            }
            else{
                unanswered++;
            }

            if($('input[name=sour]:checked').val() === "C") {
                correctAnswers++;
                }
                else if($('input[name=sour]:checked').val() === "W") {
                    wrongAnswers++;
                }
                else{
                    unanswered++;
                }
                console.log(correctAnswers);
                console.log(wrongAnswers);
                console.log(unanswered);
                };
                $(".container").on("click", "#submit", function() {
                endTimer();
                $(".col-md-8").empty();
                $(".col-md-8").append("<br> <h1>Beer Snob Trivia</h1> <br> <h2>Correct Answers:" + correctAnswers + "</h2>" + "<h2> Wrong Answers:" + wrongAnswers + "</h2>" + "<h2> Unanswered:" + unanswered + "</h2> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");

            });
        });


                 
           




