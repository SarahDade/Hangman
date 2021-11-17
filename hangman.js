
const letters = "qwertyuiopasdfghjklzxcvbnm";

let lettersArray = Array.from(letters);

// word

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {

  let span = document.createElement("span");

  let TheLetter = document.createTextNode(letter);

  span.appendChild(TheLetter);

  span.className = "letter-box";

  lettersContainer.appendChild(span);

});

// categories //

const words = {

  MOVIES: [

    'django',
    'matrix',
    'starwars',
    'gladiator',
    'ted',
    'inception',
    'et',
    'schrek',
    'grease'

  ],

  CAPITALS: [

    'abidjan',
    'amsterdam',
    'athens',
    'berlin',
    'bagdad',
    'bogota',
    'brussels',
    'cambera',
    'cairo',
    'caracas',
    'damas',
    'dakkar',
    'djibouti',
    'lisbon',
    'nairobi',
    'ottawa',
    'roma',
    'tokyo'
  ],

  ADJECTIVES: [

    'accurate',
    'ambitious',
    'available',
    'competitive',
    'credible',
    'careful',
    'demanding',
    'dynamic',
    'easygoing',
    'efficient',
    'friendly',
    'funny',
    'helpful',
    'humble',
    'loyal',
    'openminded',
    'reliable',
    'skilled',
    'smart',
    'successful',
    'useful'
  ],

}


// Defining a random word //

let allKeys = Object.keys(words);

let randomIndex = Math.floor(Math.random() * allKeys.length);
let randomCategory = allKeys[randomIndex];
let randomValues = words[randomCategory];

let randomWord = Math.floor(Math.random() * randomValues.length);

let word = (randomValues[randomWord])

console.log(word);

// show categories //

document.querySelector(".game-state .category span").innerHTML = randomCategory;

// Select input //

let guessContainer = document.querySelector(".letters-guess");

let wordLetters = Array.from(word);

console.log(wordLetters);

//display hidden word//

let answerArr = [];
for (let i = 0; i < wordLetters.length; i++) {
  answerArr[i] = '_';
}

guessContainer.innerHTML = answerArr;

let wrongAttempts = 0;

let draw = document.querySelector(".hangman-draw")

let playAgain = document.querySelector(".PlayAgain")

    //click event//

function refreshPage(){
  window.location.reload();
} 

document.addEventListener("click", (e) => {
  console.log(e.target)

  if (e.target.className === 'letter-box') {

      e.target.classList.add("clicked");

      let clickedLetter = e.target.innerHTML.toLowerCase();

      let theStatus = false;

      for (let i = 0; i < wordLetters.length; i++) {

        if (clickedLetter === wordLetters[i]) {

            theStatus = true;

            console.log(` found At ${i}`);
            answerArr[i] = wordLetters[i];

            guessContainer.innerHTML = answerArr;

            if (JSON.stringify(answerArr) === JSON.stringify(wordLetters)) {
              alert("Congrats, you won !")
              refreshPage()
            }           
        } 

      }

      if (theStatus !== true) {

        wrongAttempts ++;
        
        draw.classList.add(`wrong-${wrongAttempts}`)

        if (wrongAttempts === 8) {
          alert("GAME OVER")
          refreshPage()
        }

      } 

  }

});

