import snakeState from './snake-state';

export default () => {
  let randomX = Math.floor(Math.random() * 40) * 10;
  let randomY = Math.floor(Math.random() * 40) * 10;
  let check = snakeState.filter(v => v.x === randomX && v.y === randomY);

  while (check.length === 1) {
    randomX = Math.floor(Math.random() * 40) * 10;
    randomY = Math.floor(Math.random() * 40) * 10;
    check = snakeState.filter(v => v.x === randomX && v.y === randomY);
  }

  return {
    randomX: Math.floor(Math.random() * 40) * 10,
    randomY: Math.floor(Math.random() * 40) * 10
  };
};