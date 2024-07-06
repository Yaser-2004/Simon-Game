const colors = ["red", "blue", "yellow", "green"];
let pickedColors = [];
let gameColorSequence = [];
var boolean = true;

var audioRed = new Audio("./music/mixkit-squeak-notification-1017.wav");
var audioGreen = new Audio("./music/mixkit-explainer-video-game-alert-sweep-236.wav");
var audioYellow = new Audio("./music/mixkit-cool-interface-click-tone-2568.wav");
var audioBlue = new Audio("./music/mixkit-arcade-game-jump-coin-216.wav");
var gameLost = new Audio("./music/mixkit-losing-bleeps-2026.wav");

const buttons = document.querySelectorAll("button");
const heading = document.querySelector("h1");
//btn.dataset.color
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.opacity=0.5;

        audioPlay(btn.dataset.color);

        setTimeout(() => {
            btn.style.opacity=1; 
        }, 100);

        pickedColors.push(btn.dataset.color);

        for(var i=0; i<pickedColors.length; i++) {
            if (pickedColors[i] != gameColorSequence[i]) {
                heading.style.display="flex";
                heading.innerHTML="Game Over!";
                console.log("Game Over!");
                gameLost.play();
            } else if ((pickedColors.length == gameColorSequence.length) && (pickedColors.toString() == gameColorSequence.toString())) {
                buttonClick();
                pickedColors=[];
                
            }
        }

    
        console.log(gameColorSequence);
        console.log(pickedColors);
    })
})

function generateRandomColor() {
    var num = Math.floor(Math.random() * 4);
    gameColorSequence.push(colors[num]);
}

function generateOneColor() {
    var num = Math.floor(Math.random() * 4);
    gameColorSequence[0] = colors[num];
}

function audioPlay(element) {
    if (element == "red") {
        audioRed.currentTime =0;
        audioRed.play();
    } else if (element == "blue") {
        audioBlue.currentTime = 0;
        audioBlue.play();
    } else if (element == "yellow") {
        audioYellow.currentTime = 0;
        audioYellow.play();
    } else {
        audioGreen.currentTime = 0;
        audioGreen.play();
    }
}

function firstbuttonClick() {
    const firstBtn = document.getElementById(gameColorSequence[0]);

    setTimeout(() => {
        firstBtn.style.opacity=0.5;
        firstBtn.style.border="10px solid white";

        audioPlay(gameColorSequence[0]);

        setTimeout(() => {
            firstBtn.style.opacity=1; 
            firstBtn.style.border="10px solid black";
        }, 100);
    }, 200);
}

function buttonClick() {
    generateRandomColor();
    const nextBtn = document.getElementById(gameColorSequence[gameColorSequence.length-1]);
    setTimeout(() => {
        nextBtn.style.opacity=0.5;
        nextBtn.style.border="10px solid white";

        audioPlay(gameColorSequence[gameColorSequence.length-1]);
        
        setTimeout(() => {
            nextBtn.style.opacity=1; 
            nextBtn.style.border="10px solid black";
        }, 100);
    }, 400)
}



window.addEventListener("keypress", () => {
    heading.style.display="none";
    generateOneColor();
    firstbuttonClick();
    console.log(gameColorSequence);
})
