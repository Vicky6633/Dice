var randomNO = Math.random();

var randomDiceNo1 = (Math.floor(randomNO*6))+1;

var randamImageSource1 = "./images/dice"+randomDiceNo1+ ".png";

var randomDiceNo2 = (Math.floor(Math.random()*6))+1;

var randamImageSource2 = "./images/dice"+randomDiceNo2+ ".png";

document.querySelector(".img1").setAttribute("src",randamImageSource1);


document.querySelector(".img2").setAttribute("src",randamImageSource2);


if(randomDiceNo1>randomDiceNo2){
    document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
}

else if(randomDiceNo1<randomDiceNo2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}

else{
    document.querySelector("h1").textContent = "Draw!";
}