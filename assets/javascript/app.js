
var x = setInterval(function() {
    var minutes = Math.floor(1000 *60);
    var seconds = Math.floor(1000);
    
    $("#timer").text(minites + "m " + seconds + "s ");
    // If the count down is over, write some text 
    /*if (minutes < 0 && seconds < 0) {
        clearInterval(x);
    $("#timer").append("<h2>Time's up!</h2>");
    }*/
}, 1000);


