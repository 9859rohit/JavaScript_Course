let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;
if(playGame){
   submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
   }) 
}
function validateGuess(guess){
    if(isNaN(guess)){
       alert('Please enter a valid Number') 
    }
    else if(guess<1){
        alert('Enter only Positive Number')
    }
    else if( guess>100){
        alert('entered number should not be greater than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            EndGame();
        }
        else{
           displayGuess(guess) 
           checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You ges it right `)
        EndGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML = `${10-numGuess}`;
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
     randomNumber = parseInt(Math.random()*100+1);
     prevGuess = [];
     numGuess=1;
     guessSlot.innerHTML =  '';
     remaining.innerHTML= `${10-numGuess}`;
     userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame =true;
    })

}

function EndGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame()
}