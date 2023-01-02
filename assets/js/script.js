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

/* Creating a function that will make "dino" jump everytime button is pressed */
function jump() {
    if(dino.classList != "animate"){
        dino.classList.add("animation");
    }
    setTimeout(function(){
        dino.classList.remove("animation")
    }, 500)
}

/* Creating a function when player hits the "wall" with "dino", player lose */
const hitWall = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue("left"));
    if(wallLeft <83 && wallLeft >0 && dinoTop >= 175) {
        wall.style.animation = "none";
        wall.style.display = "none";
    }
}, 10);
/* ------------------------------------------------------ Inpspiration from "KnifeCircus" ends here. */