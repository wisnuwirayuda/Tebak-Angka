'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMesage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

const displayScore = function (score) {
  return (document.querySelector('.score').textContent = score);
};

const displayNumber = function (number) {
  return (document.querySelector('.number').textContent = number);
};

const displayBackground = function (background) {
  return (document.querySelector('body').style.backgroundColor = background);
};

const widthNumber = function (width) {
  return (document.querySelector('.number').style.width = width);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMesage('⛔ No Number');
  } else if (guess === secretNumber) {
    displayMesage('✔ True');
    displayNumber(secretNumber);
    displayBackground('#60b347');
    widthNumber('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMesage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMesage('You Lose The Game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.guess').value = '';
  displayNumber('?');
  displayBackground('#222');
  widthNumber('15rem');
  displayScore(score);
  displayMesage('Start guessing...');
});
