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
    removeBackgroundColor(expectedAlphabet);
    continueGame();
}
else{
    console.log('You lost a life');
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