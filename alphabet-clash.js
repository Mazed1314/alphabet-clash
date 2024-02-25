// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }

// ------------------utility------------------- //

function hideElementById(e) {
  document.getElementById(e).classList.add("hidden");
}
function showElementById(e) {
  document.getElementById(e).classList.remove("hidden");
}
function setBackgroundColorById(e) {
  document.getElementById(e).classList.add("bg-orange-400");
}
function removeBackgroundColorById(e) {
  document.getElementById(e).classList.remove("bg-orange-400");
}
function getTextElementValueById(e) {
  return parseInt(document.getElementById(e).innerText);
}
function setTextElementValueById(e, v) {
  document.getElementById(e).innerText = v;
}
function getElementTextById(e) {
  return document.getElementById(e).innerText;
}
function getARandomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabets[Math.round(Math.random() * 25)];
}
