function handelKeyboardKeyupEvent(event) {
    const playerPress = event.key;
    console.log('player press:', playerPress);
    
    // stop the game if pressed Escape
    if(playerPress === 'Escape'){
        gameOver();
    }
    // get expected to press
    const currentAlphabetElement = document.getElementById('screen-alpha');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress, expectedAlphabet);
    // check matched or not
    if (playerPress === expectedAlphabet) {
        console.log('You got a point');
        // Update Score:
        // 1. get the current score
        const currentScore = getTextValueElementById('current-score');
        console.log(currentScore);
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(typeof currentScore);
        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        const updatedScore = currentScore + 1;
        setTextElementById('current-score', updatedScore);
        // // 3. show the update score
        // currentScoreElement.innerText = newScore;
        // // start a new round
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You lost a life');
        const currentLife = getTextValueElementById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementById('current-life', updatedLife);
        // 1. get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(typeof currentLife);
        // 2. reduce the life count
        // const reduceLife = currentLife - 1;
        // 3. display the updated life count 
        // currentLifeElement.innerText = reduceLife;
        if (updatedLife === 0) {
            gameOver();
        }
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

    // hide everything only show the playground
    hideElementById('home-screen');
    hideElementById('game-over');
    showElementById('playground');

    // reset score and life
    setTextElementById('current-life', 5);
    setTextElementById('current-score', 0);
    continueGame();
}
function gameOver() {
    hideElementById('playground');
    showElementById('game-over');
    const lastScore = getTextValueElementById('current-score');
    setTextElementById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('screen-alpha');
    console.log(currentAlphabet);
    removeBackgroundColor(currentAlphabet);
}