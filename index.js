var n = Math.random();
randomNumber1 = Math.floor(n*6)+1;

var a = Math.random();
randomNumber2 = Math.floor(a*6)+1;

var img1 = document.querySelector(".img1");

img1.setAttribute('src',"./images/dice"+randomNumber1+".png");

var img2 = document.querySelector(".img2");

img2.setAttribute('src',"./images/dice"+randomNumber2+".png");

var WinProb = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    WinProb.innerHTML = "Player 1 Wins!"
}
else if (randomNumber1 === randomNumber2) {
    WinProb.innerHTML = "Draw!"
}
else {
    WinProb.innerHTML = "Player 2 Wins!"
}


