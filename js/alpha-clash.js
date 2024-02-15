function continueGame(){
    // Step-1: get a random alphabet generate
    const alphabet = getARandomAlphabets();
    console.log(alphabet);
}
function play(){
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