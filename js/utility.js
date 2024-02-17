function hideElementById(hideElement){
    const hide = document.getElementById(hideElement);
    hide.classList.add('hidden');
}
function showElementById(showElement){
    const show = document.getElementById(showElement);
    show.classList.remove('hidden');
}
function setBackgroundColor(setId){
    const backgroundColor = document.getElementById(setId);
    backgroundColor.classList.add('bg-orange-400');
}
function removeBackgroundColor(setId){
    const backgroundColor = document.getElementById(setId);
    backgroundColor.classList.remove('bg-orange-400');
}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
function getTextValueElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value =   parseInt(elementValueText);
    return value;
}
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getARandomAlphabets(){
    //Step-1: get or create an array
    const alphabetString = 'abcdehghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // Step-2: get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(alphabet, index);
    return alphabet;
}
