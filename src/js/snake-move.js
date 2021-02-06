import snakeState from './snake-state';
import newHead from './snake-new-head';

export default () => {
  const head = newHead();
  snakeState.unshift(head);
  snakeState.pop();
};