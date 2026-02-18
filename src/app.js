const who = ['Javi', 'Facu', 'Lisa', 'Marveen'];
const action = ['ate', 'danced on', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const where = ['at the supermarket', 'at the hospital', 'at the graveyard', 'in Mexico', 'in a Party'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
const why = ['because he was bored', 'because a wasp sting him', 'because he was making a TikTok',]

// function for selecting a random element
const randomSelection = (arr) => arr[Math.floor(Math.random() * arr.length)];

// array of the arrays themselves
const words = [who, action, what, where, when, why]

// value of who for the special why
let randomWho = randomSelection(who);

// conection to the window from JS to HTML
window.onload = function() {

// reduce for making the whole sentence
const excuse = words.reduce((acc, arr) => {
  return acc + " " + randomSelection(arr);
}, "").trim();

  document.getElementById("excuse").innerHTML = excuse;

};