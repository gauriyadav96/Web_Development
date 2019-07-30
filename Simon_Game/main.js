buttonColours = ["red", "blue", "green", "yellow"];
gamePattern=[];
userClickedPattern=[];
var started=false;
var level=0;

// detect keyboard press
$(document).keypress(function(){
  if (!started){
    $("#level-title").text("Level "+level)
    nextSequence();
    started = true;
  }
});


// get the colored button which was clicked by user and store in array
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

// give sound and effect to the user clicked button
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});


// random button selection by the system
function nextSequence(){
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);
 var randomNumber = Math.floor(Math.random()*4);
 var randomChosenColour = buttonColours[randomNumber];
 gamePattern.push(randomChosenColour);

 $("#"+randomChosenColour).fadeOut(150).fadeIn(150);
 playSound(randomChosenColour);


}

// make the button play sound
function playSound(name){
  var sound = new Audio("sounds/"+name+".mp3");
  sound.play();
}


function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");

  setTimeout(function(){
  $("#"+currentColor).removeClass("pressed");
  }, 100);

}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// to check the user sequence with the system sequence
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
