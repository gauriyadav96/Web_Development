var randomNumber1 = Math.floor(Math.random()*6)+1;
img1Name = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",img1Name);

var randomNumber2 = Math.floor(Math.random()*6)+1;
img2Name = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",img2Name);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
} else{
  document.querySelector("h1").innerHTML = "Ooops...Its a Tie";
}
