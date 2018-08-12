$(document).ready(function() {

    var intervalId;
    var number = 0;

    function run() {
        number = 31;
        clearInterval(intervalId);
        intervalId = setInterval( increment, 1000)
    }

    function increment() {
        number--;
        $("#countdown").html("<span>" + " " + number + "</span>")
            if(number === 0) {
               losses++;
               number = 31;
            //    run();
                alert("Time is up. Please try the next word.");
                run();
                reset();

            }
        }



       run();
    

    





var wordBank = ["legend", "glacier", "breeze", "enchanting", "seasons", "fauna", "forests", "treasure", "stars", "eden", "peace", "tundra", "existence"]
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var randomWord;
var incorrectGuesses = [];
var lettersInWord; //breaks up word into letter array
var letterAndBlanks; //lettersAndBlanks ["_", "_", "_"]

function reset() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    random = randomWord.toLowerCase();
    lettersInWord = randomWord.split(""); //generate values for lettersInWord. the opposite of a .split is a .join
    lettersAndBlanks = [];
    guessesLeft = 10;
    incorrectGuesses = [];

    lettersInWord.forEach(function(letter) {
      lettersAndBlanks.push("_");
    });

    document.getElementById("letterBlanks").textContent = letterAndBlanks.join("  ");
    document.getElementById("guessesRemaining").textContent = guessesLeft;
    document.getElementById("incorrectGuesses").textContent = "";

}


function checkletter(guess) {
    var letterFound = false;
    if(lettersInWord.indexOf(guess) !== -1) {
        letterFound = true;
    }
    if (letterFound === true) {
        lettersInWord.forEach(function(letter, index) {
            if(letter === guess) {
                lettersAndBlanks[index] = guess;
            }
        });
    }
      else {
          guessesLeft--;
          incorrectGuesses.push(guess);
      }
}

function roundComplete() {
    document.getElementById("letterBlanks").textContent = lettersAndBlanks.join(" ");
    document.getElementById("guessesRemaining").textContent = guessesLeft;
    document.getElementById("incorrectGuesses").textContent = incorrectGuesses.join(", ");
        
    if (guessesLeft <= 0) {
            losses++;
            number = 30; 
            run();
            document.getElementById("losses").textContent = losses;
            setTimeout(function() {
                alert("You lost!");
                reset();
            }, 1000);
            
        }
        else if(lettersAndBlanks.join("") === lettersInWord.join("")) {
           wins++;
           number = 30; 
            run();
           document.getElementById("wins").textContent = wins;
           setTimeout(function() {
            alert("You Win!");
            reset();
        }, 1000);
        }
    }



        document.onkeyup = function(event) {
            var guess = event.key.toLowerCase();
            if((guess.match(/[a-z]/)) && (guess.length === 1) && (incorrectGuesses.indexOf(guess) === -1)) {
                checkletter(guess);
                roundComplete();
            }
              else {
                  return false;
              }

              
    

    }

    

        reset();

    });


   
   
        


    
        // function run() {
        //     number = 30;
        //     clearInterval(intervalId);
        //     intervalId = setInterval( decrement, 1000)
        // }
    
        // function decrement() {
        //     number--;
        //     $("#countdown").html("<p>" + number + "</p>")
        //         if(number === 0) {
        //             stop();
        //             alert("Time's up!");
        //         }
        //    }
    
        //    function stop() {
        //        clearInterval(intervalId);
    
               
        //    }
    
    
        //    run();
        

