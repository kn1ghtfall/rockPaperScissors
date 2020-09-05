console.log("running");


var scoreOneObj = document.getElementById("playerOneScore");
var scoreTwoObj = document.getElementById("playerTwoScore");
var buttons = document.querySelectorAll("button");
var scoreLimitInput = document.querySelector("input");
var scoreLimit = document.getElementById("scoreLimit");

var i = 0;// player one score
var j = 0;// player two score
var done = false;

function isOver() {
    if (scoreOneObj.textContent === scoreLimit.textContent) {
        scoreOneObj.style.color = "green";
        done = true;
    }
    else if (scoreTwoObj.textContent === scoreLimit.textContent) {
        scoreTwoObj.style.color = "green";
        done = true;
    }
}

function reset(){
    scoreOneObj.innerHTML = 0;
    scoreTwoObj.innerHTML = 0;
    done=false;
    i = j = 0;
    scoreOneObj.style.color = "black";
    scoreTwoObj.style.color = "black";
}

buttons[0].addEventListener("click", function () {
    if (done === false) {
        scoreOneObj.innerHTML = ++i;
        isOver();
    }
});

buttons[1].addEventListener("click", function () {
    if (done === false) {
        scoreTwoObj.innerHTML = ++j;
        isOver();
    }
});

buttons[2].addEventListener("click", function(){
    reset()
});

scoreLimitInput.addEventListener("change", function () {
    scoreLimit.innerHTML = scoreLimitInput.value;
    reset();
});