import snakeState from './snake-state';
import constant from './constant';
import snakeMove from './snake-move';

const $canvas = document.querySelector('.canvas');
const ctx = $canvas.getContext('2d');

export default () => {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  snakeState.forEach(v => {
    ctx.beginPath();
    ctx.rect(v.x, v.y, constant.sizeX, constant.sizeY);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
  });
  snakeMove();
};