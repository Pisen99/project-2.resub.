/* ------------------------------------------------------ Start game */
function startGame() {
    const btn = document.getElementById('start-game-button');
    btn.style.display = 'none';
    document.getElementById("wall").style.WebkitAnimationPlayState = "running";


/* ------------------------------------------------------ Game score */
/* Creating a "score" function that will show user how long they've been in the game. */
    window.setInterval((function(){
        const start = Date.now();
        const textNode = document.createTextNode('0');
        document.getElementById('milli-seconds').appendChild(textNode);
        return function() {
             textNode.data = Math.floor((Date.now()-start)/100);
             };
        }()), 100);
}


/* ------------------------------------------------------ Rules popup */
const rulesPopUp = document.getElementById('rules-container');

function popupContainer() {
    rulesPopUp.style.visibility = 'visible';
}

function popupContainerClose() {
    rulesPopUp.style.visibility = 'hidden';
}

/* Following code is inspired from "KnifeCircus" on Youtube */
/* Getting elements from html */
const dino = document.getElementById("dino");
const wall = document.getElementById("wall");


/* ------------------------------------------------------ Jump-button */
/* Creating a function that will make "dino" jump everytime button is pressed */
function jump() {
    if(dino.classList != "animate"){
        dino.classList.add("animation");
    }
    setTimeout(function(){
        dino.classList.remove("animation");
    }, 500)
}


/* ------------------------------------------------------ If the blocks (dino, wall) hit each other */
/* Creating a function when player hits the "wall" with "dino", player lose */
const hitWall = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue("left"));
    let timer = document.getElementById("milli-seconds")
    if(wallLeft <83 && wallLeft >0 && dinoTop >= 175) {
        wall.style.animation = "none";
        wall.style.display = "none";
        alert("You lost! :( ");
        timer.innerHTML = "0";
    }
}, 10);
/* ------------------------------------------------------ Inpspiration from "KnifeCircus" ends here. */