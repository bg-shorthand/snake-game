import constant from './constant';
import appleState from './apple.state';

const $canvas = document.querySelector('.canvas');
const ctx = $canvas.getContext('2d');

export default (randomX, randomY) => {
  ctx.beginPath();
  ctx.rect(randomX, randomY, constant.sizeX, constant.sizeY);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
  appleState.x = randomX;
  appleState.y = randomY;
};