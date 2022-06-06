let numClick = -1;
let userPattern = [];
let correctPattern = [];
let highscore = 0;
let score  = 0;
let possibleTiles = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6", "tile-7", "tile-8", "tile-9", "tile-10", "tile-11", "tile-12", "tile-13", "tile-14", "tile-15", "tile-16"]

const startbtn = document.querySelector(".button");
const box = document.querySelectorAll(".grid");

box.forEach(grid => {
    grid.addEventListener("click", function(tileclicked){
        numClick++;
        let tile = tileclicked.target.id;
        flash(tile);
        playAudio(tile);
        check(tile);

    });   
});

function check(tile){
    userPattern.push(tile);
    if(tile == correctPattern[numClick]){
        if(userPattern.length == correctPattern.length){
            setTimeout(function(){
                userPattern=[];
                numClick = -1;
                play();
            }, 1000)
        }
    }  else{
        document.querySelector(".header").innerHTML="game over!"
        userPattern = [];
        correctPattern = [];

        if(score>highscore){
            highscore = score;
            document.querySelector(".highscore").innerHTML = score;
        }
        score = 0;
        numClick = -1;

    }

}


startbtn.addEventListener('click', (event) => {
     play();
});

function play(){
    score++;
    document.querySelector(".score").innerHTML = score;
    let randomNumber = Math.floor(Math.random()*17);
    let tile = possibleTiles[randomNumber];
    correctPattern.push(tile);
    playAudio(tile);
    flash(tile);

}

function playAudio(tile){
    let audio = document.getElementById("clip");
    audio.play();

}

function flash(randomNumber){
    let grid = document.getElementsByClassName("grid")[randomNumber];
    grid.style.backgroundColor = "#ff99cc";
    setTimeout(()=>(grid.style.backgroundColor=" rgb(255, 94, 148)"),400)   
}

