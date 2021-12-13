'use strict';

/* onsole.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number '; // ändert nun den inhalt von start guessing zu correct number
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('it is', secretNumber);

let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input:
  if (!guess) {
    //document.querySelector('.message').textContent = 'no number';
    displayMessage('no number');
  }

  //when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  /*   //when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high ';
      score--; // 1 abziehen vom score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low ';
      score--; // 1 abziehen vom score
      document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'you lost the game';
        document.querySelector('.score').textContent = 0;}} */

  // when guess is wront: taking "too low" and "too high" together
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'too high ' : 'too low';
      displayMessage(guess > secretNumber ? 'too high ' : 'too low');

      score--; // 1 abziehen vom score
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //player lost the game after 19 attemps
  else {
    displayMessage('you lost the game');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
