// function play() {
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground
//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
}