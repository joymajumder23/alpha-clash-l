function play(){
    // console.log('Connected');
    const homeScreen = document.getElementById('home-screen')
    // console.log(homeScreen.classList);
    homeScreen.classList.add('hidden');
    const playGround = document.getElementById('playground');
    // console.log(playGround.classList);
    playGround.classList.remove('hidden');
}