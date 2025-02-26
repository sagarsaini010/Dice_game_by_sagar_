var randNum1 = Math.floor( (Math.random()*6)+1);
var randNum2 = Math.floor( (Math.random()*6)+1);

if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randNum1 < randNum2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}



document.querySelector("div .img1").setAttribute("src", "./images/dice" + randNum1 +".png");

document.querySelector("div .img2").setAttribute("src", "./images/dice" + randNum2 +".png");