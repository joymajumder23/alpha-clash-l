function handelKeyboardKeyupEvent(event){
    const playerPress = event.key;
    console.log('player press:', playerPress);

// get expected to press
const currentAlphabetElement = document.getElementById('screen-alpha');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPress, expectedAlphabet);
// check matched or not
if(playerPress === expectedAlphabet){
    console.log('You got a point');
    // Update Score:
    // 1. get the current score
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(typeof currentScore);
    // 2. increase the score by 1
    const newScore = currentScore + 1;
    // 3. show the update score
    currentScoreElement.innerText = newScore;
    // start a new round
    removeBackgroundColor(expectedAlphabet);
    continueGame();
}
else{
    console.log('You lost a life');
    // 1. get the current life number
    // 2. reduce the life count
    // 3. display the updated life count 
}
}
// function handleKeyboardButtonPress(){
//     console.log('Button Pressed');
// }
document.addEventListener('keyup', handelKeyboardKeyupEvent);
function continueGame() {
    // Step-1: get generate a random alphabet
    const alphabet = getARandomAlphabets();
    console.log(alphabet);
    // Step-2: get genereted random alphabet to screen (show it) 
    const screenAlpha = document.getElementById('screen-alpha');
    screenAlpha.innerText = alphabet;
    // Step-3: set background color
    setBackgroundColor(alphabet);
}
function play() {
    // // console.log('Connected');
    // const homeScreen = document.getElementById('home-screen')
    // // console.log(homeScreen.classList);
    // homeScreen.classList.add('hidden');
    // const playGround = document.getElementById('playground');
    // // console.log(playGround.classList);
    // playGround.classList.remove('hidden');
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}