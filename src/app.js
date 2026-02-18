const who = ['Javi', 'Facu', 'Lisa', 'Marveen'];
const action = ['ate', 'danced on', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const where = ['at the supermarket', 'at the hospital', 'at the graveyard', 'in Mexico', 'in a Party'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
const why = ['because he was bored', 'because a wasp sting him', 'because he was making a TikTok', "because the web wasn't responsive"]

// function for selecting a random element
const randomSelection = (arr) => arr[Math.floor(Math.random() * arr.length)];

// array of the arrays themselves
const words = [who, action, what, where, when, why]

// main function *Edit changed from window to make the button work
const generateExcuse = () => {

  // value of who for the special why
  let randomWho = randomSelection(who);

  // reduce for making the whole sentence
  const excuse = words.reduce((acc, arr) => {

    // special why conditional
    if (arr === why) {
      let normalWhy = randomSelection(why);
      let specialWhy = `because ${randomWho} told him to do it`;
      let finalWhy = Math.random() < 0.8 ? normalWhy : specialWhy;
      return acc + " " + finalWhy;
    }

    // different options
    return acc + " " + randomSelection(arr);
  }, "").trim();

  // conection with script at HTML
  document.getElementById("excuse").innerHTML = excuse;
};

document.getElementById("generateBtn").addEventListener("click", generateExcuse);

window.onload = generateExcuse;