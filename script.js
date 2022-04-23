// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback

// Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var numMistakes;


// User begins the game
function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  pattern = generatePattern();
  numMistakes = 0;
  
  document.getElementById("Lives").innerHTML = "Number of Lives: " + (3 - numMistakes).toString();
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  // Plays the first clue
  playClueSequence();
}


// User ends the game
function stopGame() {
  // game is over
  gamePlaying = false;
  
  // reset clueHoldTime to 1000
  clueHoldTime = 1000;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}


// Generates a random pattern for each game
function generatePattern() {
  
  // Stores all the patterns
  var pattern = [];
  
  // Number of patterns can be between 5-8
  var numPatterns = Math.floor(Math.random() * 8) + 5;
  
  // Gets a random number between 1-4 and stores it into pattern
  for (let i = 0; i < numPatterns; i++) {
    var randomNum = Math.floor(Math.random() * 6) + 1;
    pattern.push(randomNum);
  }
  
  // Pattern is returned
  return pattern;
}


// Lights a Button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}


// Clears a Button
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


// Plays a clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}


// Plays more than one clue
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
  // Makes each turn go faster
  clueHoldTime -= 75;
}


// User loses the Game
function loseGame(){
  document.getElementById("Lives").innerHTML = "Number of Lives: " + (0).toString();
  stopGame();
  alert("Game Over. You lost.");
}


// User Wins the Game
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}


// User makes a guess
function guess(btn){
  console.log("user guessed: " + btn);
  
  // Game stops
  if(!gamePlaying){
    return;
  }
  
  // Guess is Correct
  if(pattern[guessCounter] == btn)
  {
    // User wins the game!
    if(guessCounter == progress && progress == pattern.length - 1)
    {
      winGame();
    }
    
    // Guess is correct
    else if (guessCounter == progress && progress != pattern.length - 1)
    {
      progress++;
      playClueSequence();
    }
    
    // GuessCounter != progress
    else 
    {
      guessCounter++;
    }
  }
  
  // Incorrect Guess. Player gets another chance
  else if (numMistakes < 2)
  {
    numMistakes++;
    document.getElementById("Lives").innerHTML = "Number of Lives: " + (3 - numMistakes).toString();
    
    // Replays the clue sequence
    playClueSequence();
  }
  
  // Player loses Game
  else {
    loseGame();
  }
} 


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 512.6,
  6: 580.3
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}


function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}


function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)