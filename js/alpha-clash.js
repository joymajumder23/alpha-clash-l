function continueGame() {
    // Step-1: get generate a random alphabet
    const alphabet = getARandomAlphabets();
    console.log(alphabet);
    // Step-2: get genereted random alphabet to screen (show it) 
    const screenAlpha = document.getElementById('screen-alpha');
    screenAlpha.innerText = alphabet;
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