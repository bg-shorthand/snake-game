import snakeRender from './snake-render';
import snakechangeWay from './snake-change-way';
import eatApple from './eat-apple';
import gameoverCondition from './game-over-condition';
import snakeState from './snake-state';
import wayState from './way-state';

let gameover = 0;
const $start = document.querySelector('.start');
const $left = document.querySelector('.left');
const $right = document.querySelector('.right');
const $resContainer = document.querySelector('.res-container');
const $res = document.querySelector('.res');
const $resScore = document.querySelector('.res span');
const $score = document.querySelector('.score span');
const $ok = document.querySelector('.ok');

const final = () => {
  snakechangeWay();
  snakeRender();
  eatApple();
  if (gameoverCondition()) {
    $resContainer.classList.add('gameover');
    $res.classList.add('gameover');
    $resScore.textContent = $score.textContent;
    clearInterval(gameover);
  }
};

$start.addEventListener('click', () => {
  $start.classList.add('play');
  $left.classList.add('play');
  $right.classList.add('play');
  gameover = setInterval(final, 200);
});

$ok.addEventListener('click', () => {
  $start.classList.remove('play');
  $left.classList.remove('play');
  $right.classList.remove('play');
  $resContainer.classList.remove('gameover');
  $res.classList.remove('gameover');
  $score.textContent = 0;
  snakeState.length = 0;
  snakeState.push(...[
    { x: 200, y: 370 },
    { x: 200, y: 380 }
  ]);
  wayState.dir = 'up';
});