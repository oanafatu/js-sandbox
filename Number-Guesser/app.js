
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e)=>{
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

guessBtn.addEventListener('click', ()=>{
  let guess = parseInt(guessInput.value);
  console.log(guess);
  
  if (isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'green');
  } else {

    if (guess === winningNum) {
  
      gameOver(true, `${winningNum} is correct! You win!`);
  
    } else {
      guessesLeft -= 1;
  
      if (guessesLeft === 0) {
        gameOver(false, `Game over! You lost! The correct number was ${winningNum}`);
  
      } else {
  
        guessInput.style.borderColor = 'red';
        setMessage(`${guess} is not correct. Guesses left: ${guessesLeft}`, 'red');
        guessInput.value = '';
      }
    }
  }

});

function gameOver(won, message){

  let color; 
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(message, color);

  guessBtn.value = 'Play again';
  guessBtn.className += 'play-again';

}

function getRandomNum(min, max){
  return Math.floor((Math.random() * (max-min + 1) + min));
}

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}