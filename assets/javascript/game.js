var yellow = 0;
var green = 0;
var red = 0;
var blue = 0;
var yourScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;

function newGame() {
    yellow = Math.floor((Math.random() * 12) + 1);
    green = Math.floor((Math.random() * 12) + 1);;
    red = Math.floor((Math.random() * 12) + 1);;
    blue = Math.floor((Math.random() * 12) + 1);;
    yourScore = 0;
    targetScore = Math.floor((Math.random() * 101) + 19);;
    $("#targetScore").html("<p> Target Score: <br> " + targetScore + "</p>");
}

newGame();


$("#yellow").on("click", function () {
    yourScore += yellow;
    gameStatus();
});


$("#green").on("click", function () {
    yourScore += green;
    gameStatus();
});


$("#blue").on("click", function () {
    yourScore += blue;
    gameStatus();
});

$("#red").on("click", function () {
    yourScore += red;
    gameStatus();
});


function gameStatus() {
    if (yourScore === targetScore) {
        wins += 1;
        newGame();
    }

    else if (yourScore > targetScore) {
        losses += 1;
        newGame();
    }


    $("#yourScore").html("<p> Your Score:<br>" + yourScore + "</p>");
    $("#winLoss").html("<p> wins:  " + wins + "<br>Losses:  " + losses + "</p>");




}



    // create 4 diamonds
    // random number should be betwen 19-120
    // crystal should be between 1-12 '

    // new game function:
    // if new game randomize values for crystals and computer score


    // 4 on click functions
    // add value to score
    // if more or equal than score call win function


    // if = computer guess yo win
    // add to wins
    // if > computer win you loose
    // add to losses
    // initialize values





