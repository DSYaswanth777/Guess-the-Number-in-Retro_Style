'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '✌Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
// variables for our Game
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//Function to display a message without using document.querySelector againand again..
const displayMessage =function(message){
    document.querySelector('.message').textContent = message;
}


// Handling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);


  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number😋';
    displayMessage('No number😋');


    // When Player Wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✌Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; 
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Guess is wrong
  } else if(guess !== secretNumber) {
    if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!': 'Too Low!';
       displayMessage(guess > secretNumber? 'Too High':'Too low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = 'You Lost game!';
        displayMessage('You lost the game!')
        document.querySelector('.score').textContent = 0;
      }
    }

//   }else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   //Guess is low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});
//Again button 
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
//   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
