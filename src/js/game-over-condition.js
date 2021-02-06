import snakeState from './snake-state';

export default () => {
  const head = snakeState[0];

  return head.x < 0
  || head.x > 390
  || head.y < 0
  || head.y > 390
  || snakeState.filter(v => v.x === head.x && v.y === head.y).length > 1;
};