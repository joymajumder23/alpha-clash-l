function hideElementById(hideElement){
    const hide = document.getElementById(hideElement);
    hide.classList.add('hidden');
}
function showElementById(showElement){
    const show = document.getElementById(showElement);
    show.classList.remove('hidden');
}