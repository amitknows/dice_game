var randomNumber_1 = (Math.floor(Math.random()*6))+1;
var randomDiceImage = "images/dice"+randomNumber_1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);




var randomNumber_2 = (Math.floor(Math.random()*6))+1;
var ran_img = "images/dice"+randomNumber_2+".png";
document.querySelectorAll("img")[1].setAttribute("src", ran_img);




if(randomNumber_1 === randomNumber_2){
document.querySelector("h1").innerHTML = "😐Draw😐";
}

else if(randomNumber_1<randomNumber_2){
    document.querySelector("h1").innerHTML = "Player 2 wins😍";
}

else{
    document.querySelector("h1").innerHTML = "😍Player 1 wins";
}
