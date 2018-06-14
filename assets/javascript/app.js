$("#button").click(function() {
    console.log("Hello, I am a functioning code.");
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
    $(".showTimer").html("<h2>" + seconds + "</h2>");

    if (seconds === 0) {
        endTimer();
        $(".container").html("<style> * { text-align: center;} </style>" + "<br> <h1>Beer Snob Trivia</h1> <br> <br> <br> <h2>Correct Answers:" + correctAnswers + "</h2>" + "<h2> Wrong Answers:" + wrongAnswers + "</h2>" + "<h2> Unanswered:" + unanswered + "</h2> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");
    }

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
                $(".container").html("<style> * { text-align: center;} </style>" + "<br> <h1>Beer Snob Trivia</h1> <br> <br> <br> <h2>Correct Answers:" + correctAnswers + "</h2>" + "<h2> Wrong Answers:" + wrongAnswers + "</h2>" + "<h2> Unanswered:" + unanswered + "</h2> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");

            });
                $("document").on("click", "#start", function() {
                    run();
                });

                 
           




