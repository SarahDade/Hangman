

//define variables//

let movies = [

'django',
'fight club',
'pretty woman',
'matrix',
'starwars',
'the godfather',
'the lord of the rings',
'the dark knight',
'gladiator',
'ted',
'alexander the great',
'rocky balboa',
'shutter island',
'the great gatsby',
'inception',
'very bad trip',
'harry potter',
'ET',
'mamma mia',
'schrek',
'grease',

];

let capitals = [

'abidjan',
'addis ababa',
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
'kuala lumpur',
'lisbon',
'nairobi',
'ottawa',
'porto novo',
'roma',
'tokyo',

];

let adjectives = [

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
'useful',

]

   // settings variable // 

   let categories = document.querySelectorAll(".categories button");

   let inputLetter = document.querySelectorAll(".userInput button");


  // function to select the randomWord from the category chosen by the user //

    let wordSelector = (category) => {
    let random = Math.floor(Math.random() * category.length);
    newWord = category[random]
    let randomWord = newWord.split(" ").join("");     //remove spaces between words//
    console.log(randomWord)

    let guesses = 10;
    let guessedLetters = [];

    // display the '_' letters of the hidden word //

    let answerArr = [];
    for (let i = 0; i < randomWord.length; i ++) {
            answerArr[i] = '_';
        }

    let remainLetters = randomWord.length;

    document.querySelector('.currentWord').querySelector('span').innerHTML = answerArr;

        
    // User clicks on a letter => the game starts //

    let currentLetter =  " ";

    function check() {

      while (remainLetters > 0) {
        // Update the game state with the guess
          for (var j = 0; j < randomWord.length; j++) {
            if (currentLetter[j] === randomWord[j]) {
            answerArr[j] = randomWord[j] ;
            remainLetters--;
            guesses--;
            }
          }
        }
      }








      

    for (let i = 0; i < 26; i++) {           
    inputLetter[i].addEventListener('click', () => {       
        inputLetter[i].style.cssText = "opacity: 1; border: solid #B9FFCE 2px";
        currentLetter = inputLetter[i].value
        console.log(currentLetter);
    });

    }

    document.querySelector('.guessesLeft').querySelector('span').innerHTML = guesses;

    document.querySelector('.guessed').querySelector('span').innerHTML = guessedLetters;

};



    let gallow = document.querySelectorAll("g .gallow")

    let hangingGuy = document.querySelectorAll("g rect");


  //   if (wrongLetters.length === 1) {
  //     for (let i = 0; i < gallow.length; i++) {
  //         gallow[i].style.display = "block";
  //     }
  // } else if (wrongLetters.length === 2) {
  //     document.querySelector(".head").style.display = "block";
  // } else if (wrongLetters.length === 3) {
  //     document.querySelector(".neck").style.display = "block";
  // } else if (wrongLetters.length === 4) {
  //     document.querySelector(".right_arm").style.display = "block";
  // } else if (wrongLetters.length === 5) {
  //     document.querySelector(".left_arm").style.display = "block";
  // } else if (wrongLetters.length === 6) {
  //     document.querySelector(".torso").style.display = "block";
  // } else if (wrongLetters.length === 7) {
  //     document.querySelector(".right_leg").style.display = "block";
  // } else if (wrongLetters.length === 8) {
  //     document.querySelector(".left_leg").style.display = "block";
  //     lose.style.display = "block";
  //     for(let i = 0; i < currentWord.length; i++){
  //         currentWordArr[i].innerHTML = currentWord[i].toUpperCase();
  //         currentWordArr[i].style.color = "grey";
  //     };

   

         // activate game onclick functions //

                    
        categories[0].addEventListener('click', () => {
            wordSelector(movies);
            // categoryAll();
            categories[0].style.cssText = "opacity: 1; border: solid #B9FFCE 2px";
            categories[1].style.cssText = "opacity: .5; border: solid #B9FFCE 1px";
            categories[2].style.cssText = "opacity: .5; border: solid #B9FFCE 1px";
        });
        
        categories[1].addEventListener('click', () => {
          wordSelector(capitals);
        //   categoryAll();
          categories[1].style.cssText = "opacity: 1; border: solid #B9FFCE 2px";
          categories[0].style.cssText = "opacity: .5; border: solid #B9FFCE 1px";
          categories[2].style.cssText = "opacity: .5; border: solid #B9FFCE 1px";
        });
        
        categories[2].addEventListener('click', () => {
          wordSelector(adjectives);
        //   categoryAll();
          categories[2].style.cssText = "opacity: 1; border: solid #B9FFCE 2px";
          categories[0].style.cssText = "opacity: .5; border: solid #B9FFCE 1px";
          categories[1].style.cssText = "opacity: .5; border: solid #B9FFCE 1px";
        });
        
        // document.querySelector("").addEventListener("click", newGame());

